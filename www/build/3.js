webpackJsonp([3],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_task_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar_ngx__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsTaskPage = /** @class */ (function () {
    function DetailsTaskPage(navCtrl, navParams, afs, taskService, alertCtrl, calendar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
        this.id_task = this.navParams.get('idTask');
        this.id_project = this.navParams.get('idProject');
        this.taskColletion = this.afs.collection('tasks', function (ref) { return ref.where('id_task', '==', _this.id_task); });
        this.taskDoc = this.taskColletion.valueChanges();
    }
    DetailsTaskPage.prototype.addPriority = function (id_task) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Prioridade da tarefa');
        alert.addInput({
            type: 'radio',
            label: 'Alta',
            value: '1',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Média',
            value: '2',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Baixa',
            value: '3',
            checked: false
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                if (data == 1) {
                    _this.color_priority = '#FF4500';
                }
                if (data == 2) {
                    _this.color_priority = '#FF8C00';
                }
                if (data == 3) {
                    _this.color_priority = '#FFD700';
                }
                _this.taskService.addPriorityTask(id_task, data, _this.color_priority);
            }
        });
        alert.present();
    };
    DetailsTaskPage.prototype.addReminder = function (id_task) {
        var _this = this;
        var options = { calendarName: 'TudoList', firstReminderMinutes: 15 };
        var alertReminder = this.alertCtrl.create({
            subTitle: "Lembrete criado com sucesso!",
            buttons: ['OK']
        });
        var alert = this.alertCtrl.create({
            title: 'Lembrete',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Nome*',
                    type: 'text'
                },
                {
                    name: 'description',
                    placeholder: 'Descrição(opcional)',
                    type: 'text'
                },
                {
                    name: 'local',
                    placeholder: 'Local(opcional)',
                    type: 'text'
                },
                {
                    name: 'initial_date',
                    placeholder: 'Data inicial*',
                    type: 'date'
                },
                {
                    name: 'final_date',
                    placeholder: 'Data final*',
                    type: 'date'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.calendar.createEventInteractivelyWithOptions(data.name, data.local, data.description, __WEBPACK_IMPORTED_MODULE_5_moment___default()(data.inicial_date).toDate(), __WEBPACK_IMPORTED_MODULE_5_moment___default()(data.final_date).toDate(), options).
                            then(function () {
                            _this.taskService.addReminder(id_task, data.name, data.local, data.description, data.initial_date, data.final_date);
                            alertReminder.present();
                        }).catch(function (e) {
                            alertReminder.setSubTitle("Erro ao criar o lembrete! Tente novamente...");
                            alertReminder.setMessage(e);
                            alertReminder.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetailsTaskPage.prototype.openSubtask = function (id_task, subtask) {
        this.navCtrl.push('SubtasksPage', {
            idTask: id_task,
            subtask: subtask
        });
    };
    DetailsTaskPage.prototype.addCollaborator = function (id_task) {
        this.navCtrl.push('SearchUserCollaboratorPage', {
            idTask: id_task,
            idProject: this.id_project
        });
    };
    DetailsTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details-task',template:/*ion-inline-start:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/details-task/details-task.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalhes da tarefa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item no-lines *ngFor="let task of taskDoc | async">\n\n      <!-- <button ion-button class="bt-tarefas" style="float: right" icon-only clear>\n        <ion-icon name="flag" color="danger"></ion-icon>\n      </button> -->\n\n      <h2 class="title-card" text-wrap> {{ task.name }} </h2>\n\n      <br>\n\n      <h2 class="titulo">Prioridade:</h2>\n\n      <button ion-button class="bt-default" *ngIf="task.priority==null" icon-start (click)="addPriority(task.id_task)">\n        <ion-icon name="podium"></ion-icon>\n        Adicionar prioridade\n      </button>\n\n      <button ion-button round *ngIf="task.priority!=null" [ngStyle]="{\'background-color\':task.color_priority}" (click)="addPriority(task.id_task)">\n        {{ task.priority }}\n      </button>\n\n      <br *ngIf="task.reminder==null">\n\n      <h2 class="titulo" *ngIf="task.reminder==null">Lembrete:</h2>\n\n       <button ion-button class="bt-default" *ngIf="task.reminder==null" icon-start (click)="addReminder(task.id_task)">\n        <ion-icon name="alarm"></ion-icon>\n        Adicionar lembrete\n      </button> \n\n      <h2 class="titulo">Tarefas vinculadas:</h2>\n      <button ion-button class="bt-default" *ngIf="task.subtask==0" icon-start (click)="openSubtask(task.id_task,task.subtask)">\n        <ion-icon name="list"></ion-icon>\n        Adicionar subtarefas\n      </button>\n\n      <button ion-button class="bt-default" *ngIf="task.subtask!=0" (click)="openSubtask(task.id_task,task.subtask)">\n        {{ task.subtask }}\n      </button>\n\n      <h2 class="titulo">Colaborador:</h2>\n      <button ion-button class="bt-default" *ngIf="task.collaborator==null" icon-start (click)="addCollaborator(task.id_task)">\n        <ion-icon name="person-add"></ion-icon>\n        Adicionar colaborador\n      </button>\n\n      <div *ngIf="task.collaborator!=null">\n        <div *ngFor="let collaborator of task.collaborator">\n          <ion-item>\n          <ion-avatar item-start>\n                <img [src]="collaborator.photo || \'../../../../assets/imgs/no-photo.jpg\'">\n              </ion-avatar>\n              <h2>@{{ collaborator.username }}</h2>\n            </ion-item>\n        </div>\n        <!-- <div *ngFor="let colaborador of tarefa.colaboradores">\n          <p style="font-weight: bold" (click)="addColaborador(tarefa.id_tarefa)">@{{ colaborador.username_colaborador }}</p>\n        </div> -->\n      </div>\n\n      <div *ngIf="task.reminder!=null">\n        <div *ngFor="let reminder of task.reminder">\n          <h2 class="titulo">Lembrete:</h2>\n          <p>{{ reminder.df }}</p>\n        </div>\n      </div>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/hinata/Documentos/2019.1/dev/TudoList/src/pages/details-task/details-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_3__providers_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar_ngx__["a" /* Calendar */]])
    ], DetailsTaskPage);
    return DetailsTaskPage;
}());

//# sourceMappingURL=details-task.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsTaskPageModule", function() { return DetailsTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_task__ = __webpack_require__(1111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsTaskPageModule = /** @class */ (function () {
    function DetailsTaskPageModule() {
    }
    DetailsTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details_task__["a" /* DetailsTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details_task__["a" /* DetailsTaskPage */]),
            ],
        })
    ], DetailsTaskPageModule);
    return DetailsTaskPageModule;
}());

//# sourceMappingURL=details-task.module.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(241);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calendar.prototype.hasReadWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "hasReadWritePermission", {}, arguments); };
    Calendar.prototype.hasReadPermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "hasReadPermission", {}, arguments); };
    Calendar.prototype.hasWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "hasWritePermission", {}, arguments); };
    Calendar.prototype.requestWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "requestWritePermission", {}, arguments); };
    Calendar.prototype.requestReadPermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "requestReadPermission", {}, arguments); };
    Calendar.prototype.requestReadWritePermission = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "requestReadWritePermission", {}, arguments); };
    Calendar.prototype.createCalendar = function (nameOrOptions) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "createCalendar", {}, arguments); };
    Calendar.prototype.deleteCalendar = function (name) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "deleteCalendar", {}, arguments); };
    Calendar.prototype.getCalendarOptions = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "getCalendarOptions", { "sync": true }, arguments); };
    Calendar.prototype.getCreateCalendarOptions = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "getCreateCalendarOptions", { "sync": true }, arguments); };
    Calendar.prototype.createEvent = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "createEvent", {}, arguments); };
    Calendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "createEventWithOptions", {}, arguments); };
    Calendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "createEventInteractively", {}, arguments); };
    Calendar.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "createEventInteractivelyWithOptions", {}, arguments); };
    Calendar.prototype.findEvent = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "findEvent", {}, arguments); };
    Calendar.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "findEventWithOptions", {}, arguments); };
    Calendar.prototype.listEventsInRange = function (startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "listEventsInRange", { "platforms": ["Android"] }, arguments); };
    Calendar.prototype.listCalendars = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "listCalendars", {}, arguments); };
    Calendar.prototype.findAllEventsInNamedCalendar = function (calendarName) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "findAllEventsInNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "modifyEvent", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "modifyEventWithOptions", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "deleteEvent", {}, arguments); };
    Calendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "deleteEventFromNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.openCalendar = function (date) { return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["cordova"])(this, "openCalendar", {}, arguments); };
    Calendar.pluginName = "Calendar";
    Calendar.plugin = "cordova-plugin-calendar";
    Calendar.pluginRef = "plugins.calendar";
    Calendar.repo = "https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin";
    Calendar.platforms = ["Android", "iOS"];
    Calendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Calendar);
    return Calendar;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGVuZGFyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlGMUMsNEJBQWlCOzs7O0lBYTdDLHlDQUFzQjtJQVN0QixvQ0FBaUI7SUFTakIscUNBQWtCO0lBU2xCLHlDQUFzQjtJQVN0Qix3Q0FBcUI7SUFTckIsNkNBQTBCO0lBVzFCLGlDQUFjLGFBQUMsYUFBcUM7SUFVcEQsaUNBQWMsYUFBQyxJQUFZO0lBWTNCLHFDQUFrQjtJQVlsQiwyQ0FBd0I7SUFjeEIsOEJBQVcsYUFDVCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWM7SUFpQmhCLHlDQUFzQixhQUNwQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxPQUF5QjtJQWdCM0IsMkNBQXdCLGFBQ3RCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYztJQWlCaEIsc0RBQW1DLGFBQ2pDLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLE9BQXlCO0lBZ0IzQiw0QkFBUyxhQUNQLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYztJQWdCaEIsdUNBQW9CLGFBQ2xCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLE9BQXlCO0lBZTNCLG9DQUFpQixhQUFDLFNBQWUsRUFBRSxPQUFhO0lBU2hELGdDQUFhO0lBV2IsK0NBQTRCLGFBQUMsWUFBb0I7SUFzQmpELDhCQUFXLGFBQ1QsS0FBYyxFQUNkLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxTQUFnQixFQUNoQixPQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsUUFBaUIsRUFDakIsWUFBbUIsRUFDbkIsVUFBaUI7SUF5Qm5CLHlDQUFzQixhQUNwQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixRQUFpQixFQUNqQixZQUFtQixFQUNuQixVQUFpQixFQUNqQixhQUErQixFQUMvQixVQUE0QjtJQWdCOUIsOEJBQVcsYUFDVCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWM7SUFtQmhCLCtDQUE0QixhQUMxQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxZQUFxQjtJQVd2QiwrQkFBWSxhQUFDLElBQVU7Ozs7OztJQXpZWixRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBMUZyQjtFQTBGOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhck9wdGlvbnMge1xuICAvKipcbiAgICogSWRcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgZmlyc3RSZW1pbmRlck1pbnV0ZXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBzZWNvbmRSZW1pbmRlck1pbnV0ZXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlY3VycmVuY2UuIENhbiBiZSBzZXQgdG8gYGRhaWx5YCwgYHdlZWtseWAsIGBtb250aGx5YCBvciBgeWVhcmx5YFxuICAgKi9cbiAgcmVjdXJyZW5jZT86IHN0cmluZztcblxuICAvKipcbiAgICogUmVjdXJyZW5jZSBpbnRlcnZhbC4gVmFsaWQgb25seSB3aGVuIGByZWN1cnJlbmNlYCBvcHRpb24gaXMgc2V0LlxuICAgKi9cbiAgcmVjdXJyZW5jZUludGVydmFsPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZWN1cnJlbmNlIGVuZCBkYXRlLiBWYWxpZCBvbmx5IHdoZW4gYHJlY3VycmVuY2VgIG9wdGlvbiBpcyBzZXQuXG4gICAqL1xuICByZWN1cnJlbmNlRW5kRGF0ZT86IERhdGU7XG5cbiAgLyoqXG4gICAqIENhbGVuZGFyIG5hbWUuIFRocyBpcyBzdXBwb3J0ZWQgYnkgYGlPU2Agb25seS5cbiAgICovXG4gIGNhbGVuZGFyTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsZW5kYXIgaWRcbiAgICovXG4gIGNhbGVuZGFySWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVSTFxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hbWVPck9wdGlvbnMge1xuICAvKiogQ2FsZW5kYXIgbmFtZSAqL1xuICBjYWxlbmRhck5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqIENhbGVuZGFyIGNvbG9yIGFzIGEgSEVYIHN0cmluZyAqL1xuICBjYWxlbmRhckNvbG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIENhbGVuZGFyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gYWRkIGV2ZW50cyB0byB0aGUgQ2FsZW5kYXIgb2YgdGhlIG1vYmlsZSBkZXZpY2UuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1jYWxlbmRhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDYWxlbmRhciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0NhbGVuZGFyLVBob25lR2FwLVBsdWdpbikuXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGVuZGFyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxlbmRhcjogQ2FsZW5kYXIpIHsgfVxuICpcbiAqXG4gKiB0aGlzLmNhbGVuZGFyLmNyZWF0ZUNhbGVuZGFyKCdNeUNhbGVuZGFyJykudGhlbihcbiAqICAgKG1zZykgPT4geyBjb25zb2xlLmxvZyhtc2cpOyB9LFxuICogICAoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycik7IH1cbiAqICk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYWxlbmRhck9wdGlvbnNcbiAqIE5hbWVPck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYWxlbmRhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbGVuZGFyJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5jYWxlbmRhcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vQ2FsZW5kYXItUGhvbmVHYXAtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB3ZSBoYXZlIHBlcm1pc3Npb24gdG8gcmVhZC93cml0ZSBmcm9tL3RvIHRoZSBjYWxlbmRhci5cbiAgICogVGhlIHByb21pc2Ugd2lsbCByZXNvbHZlIHdpdGggYHRydWVgIHdoZW46XG4gICAqIC0gWW91J3JlIHJ1bm5pbmcgb24gaU9TLCBvclxuICAgKiAtIFlvdSdyZSB0YXJnZXRpbmcgQVBJIGxldmVsIGxvd2VyIHRoYW4gMjMsIG9yXG4gICAqIC0gWW91J3JlIHVzaW5nIEFuZHJvaWQgPCA2LCBvclxuICAgKiAtIFlvdSd2ZSBhbHJlYWR5IGdyYW50ZWQgcGVybWlzc2lvblxuICAgKlxuICAgKiBJZiB0aGlzIHJldHVybnMgZmFsc2UsIHlvdSBzaG91bGQgY2FsbCB0aGUgYHJlcXVlc3RSZWFkV3JpdGVQZXJtaXNzaW9uYCBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUmVhZFdyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgaGF2ZSByZWFkIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1JlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBoYXZlIHdyaXRlIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1dyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCB3cml0ZSBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCByZWFkIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHJlYWQvd3JpdGUgcGVybWlzc2lvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFJlYWRXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgY2FsZW5kYXIuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBOYW1lT3JPcHRpb25zfSBuYW1lT3JPcHRpb25zICBlaXRoZXIgYSBzdHJpbmcgbmFtZSBvciBhIG9wdGlvbnMgb2JqZWN0LiBJZiBzdHJpbmcsIHByb3ZpZGUgdGhlIGNhbGVuZGFyIG5hbWUuIElGIGFuIG9iamVjdCwgcHJvdmlkZSBhIGNhbGVuZGFyIG5hbWUgYXMgYSBzdHJpbmcgYW5kIGEgY2FsZW5kYXIgY29sb3IgaW4gaGV4IGZvcm1hdCBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcmVhdGVDYWxlbmRhcihuYW1lT3JPcHRpb25zOiBzdHJpbmcgfCBOYW1lT3JPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgY2FsZW5kYXIuIChpT1Mgb25seSlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNhbGVuZGFyIHRvIGRlbGV0ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlQ2FsZW5kYXIobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBjYWxlbmRhciBvcHRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJuIHtDYWxlbmRhck9wdGlvbnN9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGRlZmF1bHQgY2FsZW5kYXIgb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgZ2V0Q2FsZW5kYXJPcHRpb25zKCk6IENhbGVuZGFyT3B0aW9ucyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3B0aW9ucyBmb3IgYSBjdXN0b20gY2FsZW5kZXIgd2l0aCBzcGVjaWZpYyBjb2xvclxuICAgKlxuICAgKiBAcmV0dXJuIHtOYW1lT3JPcHRpb25zfSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGdldENyZWF0ZUNhbGVuZGFyT3B0aW9ucygpOiBOYW1lT3JPcHRpb25zIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2lsZW50bHkgY3JlYXRlIGFuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNyZWF0ZUV2ZW50KFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGVcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2lsZW50bHkgY3JlYXRlIGFuIGV2ZW50IHdpdGggYWRkaXRpb25hbCBvcHRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJPcHRpb25zfSBbb3B0aW9uc10gIEFkZGl0aW9uYWwgb3B0aW9ucywgc2VlIGBnZXRDYWxlbmRhck9wdGlvbnNgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNyZWF0ZUV2ZW50V2l0aE9wdGlvbnMoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBvcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyYWN0aXZlbHkgY3JlYXRlIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNyZWF0ZUV2ZW50SW50ZXJhY3RpdmVseShcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyYWN0aXZlbHkgY3JlYXRlIGFuIGV2ZW50IHdpdGggYWRkaXRpb25hbCBvcHRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJPcHRpb25zfSBbb3B0aW9uc10gIEFkZGl0aW9uYWwgb3B0aW9ucywgc2VlIGBnZXRDYWxlbmRhck9wdGlvbnNgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNyZWF0ZUV2ZW50SW50ZXJhY3RpdmVseVdpdGhPcHRpb25zKFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgb3B0aW9ucz86IENhbGVuZGFyT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZpbmRFdmVudChcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtvcHRpb25zXSAgQWRkaXRpb25hbCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBldmVudCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaW5kRXZlbnRXaXRoT3B0aW9ucyhcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlLFxuICAgIG9wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnNcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhIGxpc3Qgb2YgZXZlbnRzIHdpdGhpbiB0aGUgc3BlY2lmaWVkIGRhdGUgcmFuZ2UuIChBbmRyb2lkIG9ubHkpXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZW5kIGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsaXN0IG9mIGV2ZW50cywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgbGlzdEV2ZW50c0luUmFuZ2Uoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBhbGwgY2FsZW5kYXJzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsaXN0IG9mIGNhbGVuZGFycywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsaXN0Q2FsZW5kYXJzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgYWxsIGZ1dHVyZSBldmVudHMgaW4gdGhlIHNwZWNpZmllZCBjYWxlbmRhci4gKGlPUyBvbmx5KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxpc3Qgb2YgZXZlbnRzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIGZpbmRBbGxFdmVudHNJbk5hbWVkQ2FsZW5kYXIoY2FsZW5kYXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgYW4gZXZlbnQuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld1RpdGxlXSAgVGhlIG5ldyBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld0xvY2F0aW9uXSAgVGhlIG5ldyBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld05vdGVzXSAgVGhlIG5ldyBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtuZXdTdGFydERhdGVdICBUaGUgbmV3IGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbbmV3RW5kRGF0ZV0gIFRoZSBuZXcgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybiBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBtb2RpZnlFdmVudChcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlLFxuICAgIG5ld1RpdGxlPzogc3RyaW5nLFxuICAgIG5ld0xvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5ld05vdGVzPzogc3RyaW5nLFxuICAgIG5ld1N0YXJ0RGF0ZT86IERhdGUsXG4gICAgbmV3RW5kRGF0ZT86IERhdGVcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTW9kaWZ5IGFuIGV2ZW50IHdpdGggYWRkaXRpb25hbCBvcHRpb25zLiAoaU9TIG9ubHkpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuZXdUaXRsZV0gIFRoZSBuZXcgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuZXdMb2NhdGlvbl0gIFRoZSBuZXcgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtuZXdOb3Rlc10gIFRoZSBuZXcgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbbmV3U3RhcnREYXRlXSAgVGhlIG5ldyBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW25ld0VuZERhdGVdICBUaGUgbmV3IGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJPcHRpb25zfSBbZmlsdGVyT3B0aW9uc10gRXZlbnQgT3B0aW9ucywgc2VlIGBnZXRDYWxlbmRhck9wdGlvbnNgXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJPcHRpb25zfSBbbmV3T3B0aW9uc10gIE5ldyBldmVudCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHJldHVybiBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBtb2RpZnlFdmVudFdpdGhPcHRpb25zKFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgbmV3VGl0bGU/OiBzdHJpbmcsXG4gICAgbmV3TG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbmV3Tm90ZXM/OiBzdHJpbmcsXG4gICAgbmV3U3RhcnREYXRlPzogRGF0ZSxcbiAgICBuZXdFbmREYXRlPzogRGF0ZSxcbiAgICBmaWx0ZXJPcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zLFxuICAgIG5ld09wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnNcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEByZXR1cm4gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRXZlbnQoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gZXZlbnQgZnJvbSB0aGUgc3BlY2lmaWVkIENhbGVuZGFyLiAoaU9TIG9ubHkpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGVuZGFyTmFtZVxuICAgKiBAcmV0dXJuIFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIGRlbGV0ZUV2ZW50RnJvbU5hbWVkQ2FsZW5kYXIoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBjYWxlbmRhck5hbWU/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbiB0aGUgY2FsZW5kYXIgYXQgdGhlIHNwZWNpZmllZCBkYXRlLlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgVGhlIGRhdGUgeW91IHdhbnQgdG8gb3BlbiB0aGUgY2FsZW5kYXIgb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wZW5DYWxlbmRhcihkYXRlOiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ })

});
//# sourceMappingURL=3.js.map