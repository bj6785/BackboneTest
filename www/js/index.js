/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Person = Backbone.Model.extend({
    defaults : {
        name : "undefined",
        age : "undefined"
    },
    initialize : function () {
       console.log("Person init.....");
    }
});

var p1 = new Person({ name : "p1_name", age : "p1_age" });
var p2 = new Person({ name : "p2_name", age : "p2_age"});

var People = Backbone.Collection.extend({
    model : Person
});

// var people = new People([p1, p2]);
// people.add({name : "p3_name", age : "p3_age"})
// console.log(people.toJSON());


var TestView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        var tmp = _.template($("#JustTest").html());

        this.$el.html(tmp);
        return this;
    },
    events: {
        "dblclick .hd": "do_extra",
    },
    do_extra: function () {
        alert("HAHAHA");
    }
});

var TestRouter = Backbone.Router.extend({
    routes: {
        "pages/:page/p:id" : "getpost",
        "*actions" : "defauteRoute"
    },
    getpost: function (page, id) {
       alert(page + " " + id);
    },
    defauteRoute: function () {
        alert("default");
    }
});

// var route = new TestRouter();
// Backbone.history.start();
// route.navigate("pages/xxx/p1", {trigger:true});
// var test = new TestView({el: $("#body")});
