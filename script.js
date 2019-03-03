var template = document.getElementById("review-item-template").innerHTML;
var interpretator = Handlebars.compile(template);
var resultHTML = interpretator({
  array: [{
      ImageName: "1",
      AltText: "Alt"
    },
    {
      ImageName: "2",
      AltText: "Alt"
    },
    {
      ImageName: "3",
      AltText: "Alt"
    },
    {
      ImageName: "4",
      AltText: "Alt"
    },
    {
      ImageName: "5",
      AltText: "Alt"
    },
    {
      ImageName: "6",
      AltText: "Alt"
    },
    {
      ImageName: "7",
      AltText: "Alt"
    },
    {
      ImageName: "",
      AltText: "Alt"
    }
  ]
});
document.querySelector("div.content div.container div.first").innerHTML += resultHTML;