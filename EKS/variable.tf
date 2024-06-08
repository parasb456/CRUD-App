variable "kubernetes_version" {
  type     = number
  description = "kubernetes version"
}

variable "vpc_cidr" {
  type        = string
  description = "default CIDR range of the VPC"
}
variable "aws_region" {
  type        = string
  description = "aws region"
}