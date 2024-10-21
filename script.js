$(document).ready(function() {
    // When a category is clicked, load the products for that category
    $('.category-link').click(function(e) {
        e.preventDefault(); // Prevent default link behavior

        var category = $(this).data('category'); // Get the clicked category
        loadProducts(category, 1); // Load the first page of the category

        // Load products function with AJAX
        function loadProducts(category, page) {
            $.ajax({
                url: 'fetch_products.php', // The PHP file that will fetch products
                type: 'GET',
                data: { category: category, page: page }, // Pass category and page number
                dataType: 'json', // Expect a JSON response
                success: function(response) {
                    // Display the fetched products in the product-list div
                    $('#product-list').html(response.products);
                    
                    // Display pagination links in the pagination div
                    $('#pagination').html(response.pagination);
                },
                error: function(xhr, status, error) {
                    console.log("AJAX Error: " + status + " - " + error);
                }
            });
        }

        // Handle pagination click event
        $(document).on('click', '.page-link', function(e) {
            e.preventDefault();
            var page = $(this).data('page'); // Get the selected page number
            loadProducts(category, page); // Load the products for the selected page
        });
    });
});
