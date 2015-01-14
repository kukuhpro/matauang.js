/*
| @Author Kukuh Prabowo
| 2015
| version 0.1
*/


(function ( $ ) {

  $.fn.matauang = function(options) {
    var input;  

    var setting = $.extend({
      output: '',
      symbol: 'Rp',
      delimiter: '.',
      endpoint: ',-',
      eventTrigger: 'keyup'
    }, options);

    var printValue = function(nilai) {
      var value = setting.symbol + '. ' + nilai + setting.endpoint;
      if (setting.output.is('input:text')) {
        setting.output.val(value);
      } else {
        setting.output.html(value);
      }
    }

    var process = function(panjang, nilai) {
      if (panjang >= 3) {
        var flag = panjang;
        var cetak = '';
        panjang = panjang % 3;
        switch(panjang) {
          case 0:
            while (flag >= 3) {
              flag = flag - 3;
              if (cetak == '') {
                cetak = nilai.substr(flag, 3);
              } else {
                cetak = nilai.substr(flag, 3) + '.' + cetak;
              }
            }
          break;
          case 1 :
            while (flag >= 3) {
              flag = flag - 3;
              if (cetak == '') {
                cetak = nilai.substr(flag, 3);
              } else {
                cetak = nilai.substr(flag, 3) + '.' + cetak;
              }
            }
            cetak = nilai.substr(0, 1) + '.' +cetak;
          break;
          case 2 :
            while (flag >= 3) {
              flag = flag - 3;
              if (cetak == '') {
                cetak = nilai.substr(flag, 3);
              } else {
                cetak = nilai.substr(flag, 3) + '.' + cetak;
              }
            }
            cetak = nilai.substr(0, 2) + '.' +cetak;
          break;
          default:
          break;
        }
        printValue(cetak);
      } else {
        printValue(nilai);
      }
    }

    return this.each(function() {
      input = $(this);
      $(document).on(setting.eventTrigger, input, function(e) {
        var nilai = input.val();
        if (nilai != '') {
          process(nilai.length, nilai);
        } else {
          setting.output.val('');
        }
      });
    }); 
  }

} ( jQuery ));
