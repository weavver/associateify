// license: MIT
// github: https://github.com/weavver/associateify
// author: Mitchel Constantin - Weavver, Inc.

var associateId = "youraffiliateTag";
var tipPercent = 5; // 5% of links

$(document).ready(function () {
     tagLinks();
});

function tagLinks() {
     var tipId = "associateify-20";

     $matchedlinks = $('a')
          .filter(function () {
               return $(this).attr('href').match(/(http|https):\/\/www.amazon.com/);
          });

     $matchedlinks.each(function () {
          var rndNum = Math.floor((Math.random() * 100) + 1);
          var tagId = (rndNum <= tipPercent) ? tipId : associateId;
          var href = $(this).attr('href');
          // to be polite we check that nobody else tagged amazon before us, that we we don't "steal" their referral
          if (!href.match(/tag=/)) {
               if (href.match(/\?/)) {
                    href = href + "&tag=" + tagId;
               }
               else {
                    href = href + "?tag=" + tagId;
               }
               $(this).attr('href', href);
          }
     });
}
