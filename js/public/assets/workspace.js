(function(){
window.JST = window.JST || {};

window.JST['dashboard/index'] = _.template('<tr>\n        <td><%= el.icon %></td>\n        <td><strong><%= el.name %></strong> <%= el.text %><span class="label label-<%= el.class %>"><%= el.info %></span></td>\n</tr>\n');
window.JST['developers/index'] = _.template('<% senior = false %>\n<% middle = false %>\n<% junior = false %>\n<% project = false %>\n<% _.each(developers, function(developer) { %>\n    <% if (developer.level != 4) { %>\n    <% if (active == "all_dev") { %>\n        <% if (developer.level == 3 && !senior) { %>\n            <h3>Senior Developers:</h3>\n            <% senior = true %>\n        <% } %>\n        <% if (developer.level == 2 && !middle) { %>\n            <h3>Middle Developers:</h3>\n            <% middle = true %>\n        <% } %>\n        <% if (developer.level == 1 && !junior) { %>\n            <h3>Junior Developers:</h3>\n            <% junior = true %>\n        <% } %>\n    <% } %>\n    <div class="user">\n        <div class="left">\n                <div class="ava">\n                    <img src="<%= developer.avatar %>" alt="" width="80" height="80">\n                </div>\n        </div>\n        <div class="right">\n                <div class="name">\n                        <p><%= developer.name %> <span>(<%= developer.role %>)</span></p>\n                </div>\n                <div class="english"><p>English level: <span><%= developer.english %></span></p></div>\n                <ul class="contacts">\n                        <% if (developer.skype) { %>\n                            <li>skype: <%= developer.skype %></li>\n                        <% } %>\n                        <li>email: <%= developer.email %></li>\n                        <% if (developer.twitter) { %>\n                            <li>twitter: <%= developer.twitter %></li>\n                        <% } %>\n                        <% if (developer.phone) { %>\n                            <li>phone: <%= developer.phone %></li>\n                        <% } %>\n                </ul>\n                <% _.each(developer.certificates, function(cert){%>\n                    <div class="cert"><span class="label label-success">Brainbench <%= cert %></span></div>\n                <% }) %>\n        </div>\n    </div>\n    <% } %>\n<% }) %>\n\n<% _.each(developers, function(developer) { %>\n    <% if (developer.level == 4) { %>\n    <% if (active == "all_dev") { %>\n        <% if (developer.level == 4 && !project) { %>\n            <h3>Project Managers:</h3>\n            <% project = true %>\n        <% } %>\n    <% } %>\n    <div class="user">\n        <div class="left">\n                <div class="ava">\n                    <img src="<%= developer.avatar %>" alt="" width="80" height="80">\n                </div>\n        </div>\n        <div class="right">\n                <div class="name">\n                        <p><%= developer.name %> <span>(<%= developer.role %>)</span></p>\n                </div>\n                <div class="english"><p>English level: <span><%= developer.english %></span></p></div>\n                <ul class="contacts">\n                        <% if (developer.skype) { %>\n                            <li>skype: <%= developer.skype %></li>\n                        <% } %>\n                        <li>email: <%= developer.email %></li>\n                        <% if (developer.twitter) { %>\n                            <li>twitter: <%= developer.twitter %></li>\n                        <% } %>\n                        <% if (developer.phone) { %>\n                            <li>phone: <%= developer.phone %></li>\n                        <% } %>\n                </ul>\n                <% _.each(developer.certificates, function(cert){%>\n                    <div class="cert"><span class="label label-success">Brainbench <%= cert %></span></div>\n                <% }) %>\n        </div>\n    </div>\n    <% } %>\n<% }) %>\n');
window.JST['emploees/alert'] = _.template('<div class="alert alert-<%= type %>">\n    <button type="button" class="close" data-dismiss="alert">×</button>\n    <strong><%= strong %></strong> <%= message %>\n</div>\n');
window.JST['emploees/day_option'] = _.template('<% _.each(days, function(day){%>\n    <option value="<%= day %>">\n        <% if (day.length == 2) { %>\n            <%= day %>\n        <% } else { %>\n            <%= "0" + day %>\n        <% } %>\n    </option>\n<% }) %>');
window.JST['emploees/modal'] = _.template('<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\n        <h3 id="myModalLabel">Delete Employee</h3>\n    </div>\n    <div class="modal-body">\n        <p>Do you really want to delete <strong><%= name %></strong> ?</p>\n    </div>\n    <div class="modal-footer">\n        <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>\n        <button data-id="<%= id %>" class="btn btn-primary delete">OK</button>\n    </div>\n</div>');
window.JST['emploees/modal_vacation'] = _.template('<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\n        <h3 id="myModalLabel">Delete Vacation</h3>\n    </div>\n    <div class="modal-body">\n        <p>Do you really want to delete this vacation?</p>\n    </div>\n    <div class="modal-footer">\n        <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>\n        <button data-id="<%= id %>" class="btn btn-primary delete">OK</button>\n    </div>\n</div>');
window.JST['emploees/reset'] = _.template('<span class="label label-<%= type %>"><%= days %></span>\n');
window.JST['emploees/test'] = _.template('<div class="brainbench_cert">\n    <input type="text" id="title" name="certificates[title][]" placeholder="Name">\n    <input class="input-small" type="text" id="score" name="certificates[score][]" placeholder="Score">\n    <span class="btn remove">remove</span>\n</div>');
window.JST['emploees/vacation'] = _.template('<p>\n    C\n    <select name="vacation[day_start][]" class="day-select">\n            <option value="1">01</option>\n            <option value="2">02</option>\n            <option value="3">03</option>\n            <option value="4">04</option>\n            <option value="5">05</option>\n            <option value="6">06</option>\n            <option value="7">07</option>\n            <option value="8">08</option>\n            <option value="9">09</option>\n            <option value="10">10</option>\n            <option value="11">11</option>\n            <option value="12">12</option>\n            <option value="13">13</option>\n            <option value="14">14</option>\n            <option value="15">15</option>\n            <option value="16">16</option>\n            <option value="17">17</option>\n            <option value="18">18</option>\n            <option value="19">19</option>\n            <option value="20">20</option>\n            <option value="21">21</option>\n            <option value="22">22</option>\n            <option value="23">23</option>\n            <option value="24">24</option>\n            <option value="25">25</option>\n            <option value="26">26</option>\n            <option value="27">27</option>\n            <option value="28">28</option>\n            <option value="29">29</option>\n            <option value="30">30</option>\n            <option value="31">31</option>\n    </select>\n    <select name="vacation[month_start][]" class="month-select">\n            <option value="1">January</option>\n            <option value="2">February</option>\n            <option value="3">March</option>\n            <option value="4">April</option>\n            <option value="5">May</option>\n            <option value="6">June</option>\n            <option value="7">July</option>\n            <option value="8">August</option>\n            <option value="9">September</option>\n            <option value="10">October</option>\n            <option value="11">November</option>\n            <option value="12">December</option>\n    </select>\n    ПО\n    <select name="vacation[day_end][]" class="day-select">\n            <option value="1">01</option>\n            <option value="2">02</option>\n            <option value="3">03</option>\n            <option value="4">04</option>\n            <option value="5">05</option>\n            <option value="6">06</option>\n            <option value="7">07</option>\n            <option value="8">08</option>\n            <option value="9">09</option>\n            <option value="10">10</option>\n            <option value="11">11</option>\n            <option value="12">12</option>\n            <option value="13">13</option>\n            <option value="14">14</option>\n            <option value="15">15</option>\n            <option value="16">16</option>\n            <option value="17">17</option>\n            <option value="18">18</option>\n            <option value="19">19</option>\n            <option value="20">20</option>\n            <option value="21">21</option>\n            <option value="22">22</option>\n            <option value="23">23</option>\n            <option value="24">24</option>\n            <option value="25">25</option>\n            <option value="26">26</option>\n            <option value="27">27</option>\n            <option value="28">28</option>\n            <option value="29">29</option>\n            <option value="30">30</option>\n            <option value="31">31</option>\n    </select>\n    <select name="vacation[month_end][]" class="month-select">\n            <option value="1">January</option>\n            <option value="2">February</option>\n            <option value="3">March</option>\n            <option value="4">April</option>\n            <option value="5">May</option>\n            <option value="6">June</option>\n            <option value="7">July</option>\n            <option value="8">August</option>\n            <option value="9">September</option>\n            <option value="10">October</option>\n            <option value="11">November</option>\n            <option value="12">December</option>\n    </select>\n    <i class="icon-remove vacation-remove"></i>\n</p>\n');
window.JST['notices/notice'] = _.template('<section class="our_notice" id="<%= id %>">\n    <div class="alert alert-<%= type %>">\n<!--        <button type="button" class="close" data-dismiss="alert">×</button>-->\n        <strong><%= status_title %></strong> <%= text %>\n    </div>\n    <div class="btn btn-mini remove" onclick="javascript: index.destroyer(this)">remove this notice</div>\n    <div class="btn btn-mini activate" onclick="javascript: index.activator(this)">make non-active</div>\n</section>');
window.JST['users/edit'] = _.template('\n<input id="input-avatar" data-action="none" type="hidden" value="<%= data.avatar_hidden %>" name="avatar[avatar]"/>\n<input id="crop-avatar" data-action="none" type="hidden" value="" name="avatar[crop_avatar]"/>\n<div class="uploaded_avatar">\n        <div class="left">\n                <div class="fileselector">\n                    <input id="fileupload" type="file" name="file" data-url="<%= data.url %>" enctype="multipart/form-data"/>\n                </div>\n                <figure class="full-avatar">\n                        <img src="<%= data.avatar %>" alt="">\n                </figure>\n        </div>\n</div>\n');
})();