module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = local.cluster_name
  cluster_version = var.kubernetes_version


  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  # EKS Managed Node Group(s)
  eks_managed_node_group_defaults = {
    ami_type               = "AL2_x86_64"
    instance_types         = ["t3.medium"]
    vpc_security_group_ids = [aws_security_group.all_worker_mgmt.id]
  }

  eks_managed_node_groups = {
    example = {
      min_size     = 2
      max_size     = 4
      desired_size = 2
    }
  }


  #   # Cluster access entry
  #   # To add the current caller identity as an administrator
  #     enable_cluster_creator_admin_permissions = true

  #     access_entries = {
  #       # One access entry with a policy associated
  #       example = {
  #         kubernetes_groups = []
  #         principal_arn     = "arn:aws:iam::123456789012:role/something"

  #         policy_associations = {
  #           example = {
  #             policy_arn = "arn:aws:eks::aws:cluster-access-policy/AmazonEKSViewPolicy"
  #             access_scope = {
  #               namespaces = ["default"]
  #               type       = "namespace"
  #             }
  #           }
  #         }
  #       }
  #     }

    tags = {
      cluster = "Assigment"
    }
}