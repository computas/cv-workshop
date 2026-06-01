output "server_hostname" {
  value = local.hostname
}

output "ssh_key" {
  value     = tls_private_key.ssh.private_key_openssh
  sensitive = true
}
