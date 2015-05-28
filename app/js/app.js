document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded() {

//s is outside of NewsWidget Module, so all functions will have access to it
  var s,
    NewsWidget = {
      settings: {
        numArticles: 5,
        articleList: $("#article-list"),
        moreButton: $("#more-button")
      },


      init: function () {
        // kick things off
        s = this.settings;
        this.bindUIActions();
      },

      //no need to bind ui actions in other parts
      //simply define them all here and then it will all happen later
      bindUIActions: function () {
        s.moreButton.on("click", function () {
          NewsWidget.getMoreArticles(s.numArticles);
        });
      },

      //now that there has been a definitions for clicking
      //one can go ahead and do clicking at this point etc.
      getMoreArticles: function (numToGet) {
        // $.ajax or something
        // using numToGet as param
      }

    };

}




