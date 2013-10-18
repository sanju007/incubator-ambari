__all__ = ["Package"]

from resource_management.base import Resource, ForcedListArgument, ResourceArgument


class Package(Resource):
  action = ForcedListArgument(default="install")
  package_name = ResourceArgument(default=lambda obj: obj.name)
  location = ResourceArgument(default=lambda obj: obj.package_name)
  version = ResourceArgument()
  actions = ["install", "upgrade", "remove", "purge"]
  build_vars = ForcedListArgument(default=[])