
/*these are the elements that will dissappear
when the user clicks on the order button, under
the condition that there's no word containing
"vegan" in the comment box.*/
let commentSection = $("#comment-section");
let orderButton = $("#order-button");
let quantityDropdown = $("#toppings-dropdown");
let toppingSel = $("#topping-selector");
let noteSection = $("#note-section");
let qtTitle = $("#qt-title");

//These are the messages of a successful order with the order's information.
let orderCompleteMessage = $("#order-complete-message");
let completeOrderSection = $("#complete-order-list");

/* Source that helped me with disappear and reappear elements:
http://richmediacs.com/rmcs_apps/jquery_Effects_and_Animations/effects_show.html
*/

//order message is initially hiden.
orderCompleteMessage.hide();

orderButton.click(function(){
    if(commentSection.val().includes("vegan")){ //a case of a non-successful order
        alert("We're sorry, but the cheesecakes contain dairy.");
    }
    else{//this is a successful order
        let chosenTopping = $('input[name="cheesecake-choice"]:checked').val();
        if(chosenTopping === undefined){
            /*instead of the message as saying undefined,
            it would be not selected instead*/
            chosenTopping = "Not Selected";
        }

        //we hide elements that are finalized when making the order.
        quantityDropdown.hide();
        toppingSel.hide();
        noteSection.hide();
        orderButton.hide();
        qtTitle.hide();

        //we make sure to let the user know that the order was successful.
        orderCompleteMessage.show();
        
        //we let the user know the
        completeOrderSection.append("<h1> Toppings: " + chosenTopping + "</h1>");
        completeOrderSection.append("<h1> Quantity: " + quantityDropdown.val() + "</h1>");
        completeOrderSection.append("<h1> Comment: " + commentSection.val() + "</h1>");
    }
});


/* This makes sure that the user can see
the months dropdown menu within the year whenever
    the user hovers over the "Jan" button.
*/
$(".month-div").hide();
$(".month-button, .month-div").hover(function(){
    $(".month-div").show();
}, function(){
    $(".month-div").hide();
});

/*Sources: used sources about click(), meaning of e (events), text, and attr()

https://www.w3schools.com/jquery/event_click.asp#:~:text=The%20click%20event%20occurs%20when,when%20a%20click%20event%20occurs.

https://stackoverflow.com/questions/10323392/in-javascript-jquery-what-does-e-mean


https://www.w3schools.com/jquery/html_attr.asp

https://stackoverflow.com/questions/6411696/how-to-change-a-text-with-jquery
*/
$(".month-div li a").click(function(e){
    let selectedMonth = $(this).attr("value");
    $(".month-button").text(selectedMonth);
});