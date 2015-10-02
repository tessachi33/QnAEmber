import Ember from 'ember';
var questions = [{
  id: 1,
  question: "Does henna fade?",
  answer: "Henna, as far as red hair goes fades very little, but as with any hair color it will have graduale fading, especially with harsh shampoos and alchoholic hairsprays",
},{
    id: 1,
    question: "Is henna only red/orange?",
    answer: "Yes, pure henna only comes in one 'color' and that is red. If you would like to switch it up, look into indigo, cassia and amla.",

  },{
    id: 1,
    question: "Is henna safe for asthmatics?",
    answer: "Henna is a perfect option for people with asthma and other sensitivities as it has not strong odors or chemicals to irritate the skin and lungs. It does have a earthy smell.",
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
