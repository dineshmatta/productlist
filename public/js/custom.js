$(document).ready(function () {
    setTimeout(function(){ findItemMaxHeight(); }, 500);
	//findItemMaxHeight();
	$(window).resize(function() {
		findItemMaxHeight();
	});
	
	$(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if(scroll > 160) {
            $('.js-productDescription').stop().animate({
                top: scroll + ($('.js-productDescription').outerHeight() > 200 ? 100 : $('.js-productDescription').outerHeight()) - 200
            }, 1000);
        }else {
            $('.js-productDescription').stop().animate({
                top: 0
            }, 1000);
        }
    });
});

function findItemMaxHeight() {
	var maxHeight = -1;

	$('.itemWrap').each(function() {
		maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});

	$('.itemWrap').each(function() {
		$(this).height(maxHeight);
	});
}


function viewProduct(productDesc, productPrice, productDetails, productImage){
    var clickedElement = $(this);
    clickedElement.addClass('selectedProduct')
    var item = {};
    item.name = productDesc;
    item.details = productDetails.split(',');
    item.price = productPrice;
    item.image = productImage;
    
    var descriptionElement = $('.onHoverDescription');
    var imageElement = descriptionElement.find('.imageCont');
    var headerElement = descriptionElement.find('.description');
    var infoElement = descriptionElement.find('.featureList');
    var priceElment = descriptionElement.find('.cartPrice');
    
    var liElement = "";
    
    if(item.details.length > 0){
        for (var i = item.details.length; i--; ) {
            liElement += '<li>' + item.details[i] + '</li>';
        }
    }
    
    imageElement.attr('src', item.image);
    headerElement.html(item.name);
    infoElement.html(liElement);
    priceElment.html(item.price);
    descriptionElement.removeClass('hide');
    descriptionElement.prev().addClass('hide');
    
}

function showPrice(){
    var descriptionElement = $('.onHoverDescription');
    var priceElment = descriptionElement.find('.cartPrice');
    alert("$" + priceElment.text());
}