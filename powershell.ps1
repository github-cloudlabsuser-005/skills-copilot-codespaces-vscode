# Login to Azure
Connect-AzAccount

# Set variables
$resourceGroupName = "example-resource-group"
$location = "eastus"
$storageAccountName = "examplestorageaccount"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount `
  -ResourceGroupName $resourceGroupName `
  -Name $storageAccountName `
  -Location $location `
  -SkuName Standard_LRS `
  -Kind StorageV2