export default {
  masters: {
    name: 'Masters',
    value: [
      'ProductCategoryMaster',
      'ChartofItems',
      'VendorMaster',
      'CustomerMaster',
      ' BillOfMaterial',
      'BillSundry'
    ]
  },
  transaction: {
    name: 'Transaction',
    value: [
      'OpeningStock',
      'Requisition / Indents',
      ' ImportGoodReceiptNote',
      'LocalGoodReceiptNote',
      'DirectGRN',
      'PurchaseOrder(Req)',
      'MaterialIssue',
      'ProductionVoucher',
      'StockJournal',
      'Sales',
      'StoreTransfer',
      'PurchaseReturn',
      ' IssueReturn',
      'SalesReturn'
    ]
  },

  reports: {
    name: 'Reports',
    value: [
      'CostOfMaterials',
      'StockReport',
      'StockLedger',
      'OpeningReport',
      'CurrentFifoReport',
      'DailyStoreLog',
      'StoreItems(Stock)',
      'GoodsReceiptReport',
      'MaterialIssueReport',
      'PO(with Requisition)',
      'PODirect',
      'ProductionVoucherReport',
      'PartywiseSalesUnderReports',
      'SalesReport'
    ]
  },
  setup: {
    name: 'Setup',
    value: ['Estate', 'FiscalYear', 'InventorySetup', 'StoreMaster']
  },
  utility: {
    name: 'Utility',
    value: ['ManageUsers', 'ManageRoles', 'ManagePermissions']
  }
};
