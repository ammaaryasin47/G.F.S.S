$(document).ready(function() {
    // Handle click on expand button
    $('.expand-btn').click(function(event) {
      event.preventDefault();
      var imageUrl = $(this).data('image');
      $('#expandedImage').attr('src', imageUrl);
      $('#imageModal').modal('show'); // Show Bootstrap modal
    });
  });