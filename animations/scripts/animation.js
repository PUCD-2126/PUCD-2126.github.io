(function(document) {
  $(document).ready(function() {
    console.log("document ready");
    setTimeout(() => {
      $('#hello-text').addClass('bounce animated');
    }, 1000);
  });
})(document);