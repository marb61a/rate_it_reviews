// Categories
Categories = new Mongo.Collection("categories");

// Products
Products = new Mongo.Collection("products");

// Product Image collection
ProductsImages = new FS.Collection("ProductsImages", {
	stores: [new FS.Store.GridFS("ProductsImages")]
});

ProductsImages.allow({
	insert: function(fileId, doc){
		return true;
	},
	download: function(fileId, doc){
		return true;
	}
});