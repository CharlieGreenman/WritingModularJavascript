function domloaded(){var t,n={settings:{numArticles:5,articleList:$("#article-list"),moreButton:$("#more-button")},init:function(){t=this.settings,this.bindUIActions()},bindUIActions:function(){t.moreButton.on("click",function(){n.getMoreArticles(t.numArticles)})},getMoreArticles:function(t){}}}document.addEventListener("DOMContentLoaded",domloaded,!1);