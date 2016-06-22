define([
  "./support/wikiHelper",
    
  "dijit/_TemplatedMixin",
  "dijit/_WidgetBase",
  "dijit/a11yclick",

  "dojo/_base/array",
  "dojo/_base/lang",

  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/dom-style",
  "dojo/on",

  "dojo/i18n!./nls/WikiWidget",

  "dojo/text!./templates/WikiWidget.html"
    
], function (
  wikiHelper,
  _TemplatedMixin, _WidgetBase, a11yclick,
  array, lang,
  domAttr, domClass, domConstruct, domStyle, on,
  i18n,
  templateString
) {
    
    var CSS = {
    // button
    base: "esri-wikipedia",
    active: "esri-wikipedia--active",
    icon: "esri-icon socicon-wikipedia",

    // panel
    panel: "esri-wikipedia__panel",
    panelOpen: "esri-wikipedia__panel--open",
    loading: "esri-wikipedia__panel--loading",
    title: "esri-wikipedia__title",
    refresh: "esri-wikipedia__refresh",
    refreshIcon: "esri-icon-refresh",
    close: "esri-wikipedia__close esri-icon-close",
    scroller: "esri-wikipedia__list-scroller",

    // list
    list: "esri-wikipedia__list",
    message: "esri-wikipedia__message",
    item: "esri-wikipedia__result",
    image: "esri-wikipedia__result-image",
    noImage: "esri-wikipedia__result-image--none",
    header: "esri-wikipedia__header",
    footer: "esri-wikipedia__footer"
  };

  return _WidgetBase.createSubclass([_TemplatedMixin], {
      
    templateString: templateString,

    // widget magic here! °˖✧◝(⁰▿⁰)◜✧˖°
    
    constructor: function(){
      console.log("hello world!");
    }

  });

});