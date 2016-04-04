// "use strict";
//
// var Dispatcher = require('../dispatcher/appDispatcher');
// var ActionTypes = require('../constants/actionTypes');
// //used to broadcast events from our stores so that react componenets know about
// //the updates of the store
// var EventEmitter = require('events').EventEmitter;
// //used to glue objects together creating
// //one object containing the properties of the glued objects
// var assign = require('object-assign');
// var _ = require('lodash');
// var CHANGE_EVENT = 'change';
//
// var _currentUser = {};
//
// //interact with components
// var UserStore = assign({}, EventEmitter.prototype, {
//     addChangeListener: function(callback){
//       this.on(CHANGE_EVENT, callback);
//     },
//
//     removeChangeListener: function(callback){
//       this.removeListener(CHANGE_EVENT, callback);
//     },
//
//     emitChange: function() {
//       this.emit(CHANGE_EVENT);
//     },
//
//     getCurrentUser: function() {
//       console.log('Sending current user' + JSON.stringify(_currentUser));
//       return _currentUser;
//     }
// });
//
// //Called everytime an action is fired - interact with dispatcher
// Dispatcher.register(function(action){
//   switch (action.actionType) {
//     case ActionTypes.SIGN_UP:
//       console.log('User data passed to userStore is' + JSON.stringify(action.user));
//       _currentUser = JSON.parse(JSON.stringify(action.user));
//       UserStore.emitChange(); //notify any react component registered with userStore
//       break;
//
//     case ActionTypes.LOG_IN:
//       _currentUser = JSON.parse(JSON.stringify(action.user));
//       UserStore.emitChange(); //notify any react component registered with userStore
//       console.log('userStore: user logging in\n');
//       break;
//   }
// });
//
// module.exports = UserStore;
//
//
// /*      Store template
// var Dispatcher = require('../dispatcher/appDispatcher');
// var ActionTypes = require('../constants/actionTypes');
// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');
// var CHANGE_EVENT = 'change';
//
// var _users = [];
//
// var User = assign({}, EventEmitter.prototype, {
//     addChangeListener: function(callback){
//       this.on(CHANGE_EVENT, callback);
//     },
//
//     removeChangeListener: function(callback){
//       this.removeListener(CHANGE_EVENT, callback);
//     },
//
//     emitChange: function() {
//       this.emit(CHANGE_EVENT);
//     }
// });
// Dispatcher.register(function(action)){
//   switch (action.actionType) {
//     case expression:
//
//       break;
//     default:
//
//   }
// }
// */
