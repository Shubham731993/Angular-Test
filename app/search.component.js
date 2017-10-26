"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var get_artist_service_1 = require("./get-artist.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_artistService) {
        this._artistService = _artistService;
        this.response = {};
        this.photo = "http://is4.mzstatic.com/image/thumb/Video60/v4/0e/c8/a4/0ec8a439-7b69-4509-d391-a51c3113c918/source/100x100bb.jpg";
        this.showSearchorData = true;
    }
    SearchComponent.prototype.onClick = function (name, tracks) {
        var _this = this;
        this._artistService.getArtistDetails(name, tracks)
            .subscribe(function (resArtistData) { return _this.response = resArtistData; }, function (resArtistError) { return _this.errorMsg = resArtistError; });
        this.showSearchorData = false;
    };
    SearchComponent.prototype.reset = function () {
        this.showSearchorData = true;
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: "search.html",
            providers: [get_artist_service_1.GetArtistService]
        }),
        __metadata("design:paramtypes", [get_artist_service_1.GetArtistService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map