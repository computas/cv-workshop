locals {
  zone            = "no-svg1"
  ip              = upcloud_server.server.network_interface[0].ip_address
  hostname        = "${replace(local.ip, ".", "-")}.${local.zone}.upcloud.host"
  compose_content = file("${path.module}/../compose.yaml")
  env_content     = <<-EOF
    CADDY_HOST='${local.hostname}'
    DB_PASSWORD='${random_password.db-password.result}'
    FRONTEND_IMAGE='ghcr.io/baksetercx/cv-workshop/frontend:latest'
    BACKEND_IMAGE='ghcr.io/baksetercx/cv-workshop/backend:latest'
  EOF
}

resource "tls_private_key" "ssh" {
  algorithm = "ED25519"
}

resource "upcloud_server" "server" {
  hostname = var.name
  zone     = local.zone
  plan     = "DEV-1xCPU-1GB-10GB"

  metadata = true
  firewall = true

  template {
    storage = "Debian GNU/Linux 13 (Trixie)"
    size    = 10
  }

  network_interface {
    type = "public"
  }

  login {
    user = var.name
    keys = [tls_private_key.ssh.public_key_openssh]
  }
}

resource "random_password" "db-password" {
  length  = 24
  special = true
}

resource "null_resource" "deploy" {
  triggers = {
    server_id    = upcloud_server.server.id
    compose_hash = sha256(local.compose_content)
    env_hash     = sha256(local.env_content)
  }

  connection {
    type        = "ssh"
    host        = local.ip
    user        = var.name
    private_key = tls_private_key.ssh.private_key_openssh
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt-get update -qq",
      "sudo apt-get install -y -qq ca-certificates curl gnupg",
      "sudo install -m 0755 -d /etc/apt/keyrings",
      "if ! command -v docker > /dev/null; then",
      "  sudo rm -f /etc/apt/keyrings/docker.gpg",
      "  curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --batch --dearmor -o /etc/apt/keyrings/docker.gpg",
      "  echo \"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(. /etc/os-release && echo $VERSION_CODENAME) stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
      "  sudo apt-get update -qq",
      "  sudo apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-compose-plugin",
      "  sudo systemctl enable docker",
      "  sudo systemctl start docker",
      "  sudo usermod -aG docker ${var.name}",
      "fi",
      "sudo systemctl is-active --wait docker",
      "sudo mkdir -p /opt/app",
      "sudo chown ${var.name}:${var.name} /opt/app",
    ]
  }

  provisioner "file" {
    content     = local.compose_content
    destination = "/opt/app/compose.yaml"
  }

  provisioner "file" {
    content     = local.env_content
    destination = "/opt/app/.env"
  }

  provisioner "remote-exec" {
    inline = [
      "cd /opt/app",
      "docker compose pull",
      "docker compose up -d --remove-orphans",
    ]
  }
}
