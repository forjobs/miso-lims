ListTarget.stain = {
  name: "Stains",
  getUserManualUrl: function() {
    return Urls.external.userManual('type_data', 'stains');
  },
  createUrl: function(config, projectId) {
    throw new Error("Must be provided statically");
  },
  getQueryUrl: null,
  createBulkActions: function(config, projectId) {
    var actions = HotTarget.stain.getBulkActions(config);
    if (config.isAdmin) {
      actions.push(ListUtils.createBulkDeleteAction('Stains', 'stains', Utils.array.getName));
    }
    return actions;
  },
  createStaticActions: function(config, projectId) {
    return config.isAdmin ? [ListUtils.createStaticAddAction('Stains', 'stain')] : [];
  },
  createColumns: function(config, projectId) {
    return [{
      sTitle: 'Name',
      mData: 'name',
      include: true,
      iSortPriority: 0
    }, {
      sTitle: 'Category',
      mData: 'categoryName',
      include: true,
      iSortPriority: 0
    }];
  }
};
