$(document).ready(function() {
  // تفعيل القائمة والعناصر بالنقر
  $('.menu div').click(function() {
      var index = $(this).index();
      $('.menu div').removeClass('active');
      $(this).addClass('active');
      $('.nacc li').removeClass('active');
      $('.nacc li').eq(index).addClass('active');
  });

  // كود الزر للزيادة والنقصان
  $('.minus').click(function() {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus').click(function() {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });

  // كود Carousel باستخدام مكتبة Owl
  $('.owl-testimonials').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplay: true,
      margin: 15,
      responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
      }
  });


});
$(document).ready(function () {
  // إعداد جميع الأكورديونات لتكون مغلقة عند تحميل الصفحة
  $('.accordion-body').css('max-height', '0');

  $('.accordion-head').on('click', function () {
      const content = $(this).next('.accordion-body');

      // Toggle the "show" class
      content.toggleClass('show');

      // إضافة أو إزالة الفئة is-open
      $(this).toggleClass('is-open');

      // Adjust max-height based on whether it's shown or hidden
      if (content.hasClass('show')) {
          content.css('max-height', content.prop('scrollHeight') + 'px'); // تعيين الارتفاع عند الفتح
      } else {
          content.css('max-height', '0'); // إعادة تعيين إلى 0 عند الإغلاق
      }
  });
});





