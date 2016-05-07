Template.home.onCreated(function () {
  this.showing = new ReactiveVar(false);
});

Template.home.helpers({
  show: () => Template.instance().showing.get()
});

Template.home.events({
  'click button': function (e, t) {
    t.showing.set(!t.showing.get());
  },

  'click #free-plant': function () {
    FlowRouter.go('birds');
  }
});