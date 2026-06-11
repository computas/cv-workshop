variable "upcloud_username" {
  type = string
}

variable "upcloud_password" {
  type      = string
  sensitive = true
}

variable "name" {
  description = "Name of the server. Must only container lowercase letters!"
  type        = string
}
