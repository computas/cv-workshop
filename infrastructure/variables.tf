variable "upcloud_username" {
  type = string
}

variable "upcloud_password" {
  type      = string
  sensitive = true
}

variable "name" {
  type = string
}
