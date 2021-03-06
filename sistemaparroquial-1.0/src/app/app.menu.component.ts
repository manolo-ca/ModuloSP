import {Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu">
            <ul app-submenu [item]="model" root="true" parentActive="true"></ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[];

    ngOnInit() {
        this.model = [
            {label: 'Inicio', icon: 'fa fa-fw fa-event', routerLink: ['Inicio']},
            {
                label: 'Facturación', icon: 'fa fa-fw fa-bookmark', badgeStyleClass: 'green-badge',
                items: [
                    {label: 'Facturación Electronica', icon: 'fa fa-fw fa-code', routerLink:'#'},
                    {label: 'Compra', icon: 'fa fa-fw fa-minus-square-o', routerLink:'#'},
                    {label: 'Venta', routerLink:'articulo/depreciacion'}
                ]
            },
            {
                label: 'Matriculas Catequesis', icon: 'fa fa-fw fa-list-alt',
                items: [
                    {label: 'Matricular', icon: 'fa fa-fw fa-table', routerLink:'#'},
                    {label: 'Periodo de Matriculas', icon: 'fa fa-fw fa-columns', routerLink:'#'}
                ]
            },
            {
                label: 'Calendario', icon: 'fa fa-fw fa-building-o', badgeStyleClass: 'green-badge', routerLink:'#'
            },
            
            {
                label: 'Servicios Pastorales', icon: 'fa fa-fw fa-gg',
                items: [
                    {label: 'Registrarse',icon: 'fa fa-fw fa-code', routerLink:'modulosp/registropersona/registropersona'},
                    {label: 'Administrar',icon: 'fa fa-fw fa-code',
                    items: [
                        
                        {label: 'Administrar servicios',icon: 'fa fa-fw fa-minus-square-o', routerLink:'modulosp/administrar/servicioslista'},
                        {label: 'Administrar tipo de documentos', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/administrar/tiposdocumentos'},
                        {label: 'Administrar Documentos persona', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/administrar/documentopersonas'},
                        {label: 'Administrar Solicitudes de documentos', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/administrar/emiciondocumentos'},
                       
                        {label: 'Administrar tipo de eucaristias', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/administrar/tipoeucaristias'},
                        {label: 'Administrar Inscripcion a eucaristias', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/administrar/inscripcioneucaristias'},
                        {label: 'Administrar Reservacion eucaristias', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/administrar/reservacioneucaristias'}
                    ]
                    },
                    {label: 'Servicios', icon: 'fa fa-fw fa-code',routerLink:'',
                    items: [
                        
                        {label: 'Emision de Documentos',icon: 'fa fa-fw fa-minus-square-o', routerLink:'modulosp/usuario/emisiondocumentosusuario'},
                        {label: 'Reservacion a Eucaristias', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/usuario/reservacioneucaristiasusuario'},
                        {label: 'Inscripcion a Eucaristias', icon: 'fa fa-fw fa-minus-square-o',routerLink:'modulosp/usuario/inscripcioneucaristiasusuario'}
                    ]
                },
                ]
            },
            
            {
                label: 'Bodega', icon: 'fa fa-fw fa-user', badgeStyleClass: 'green-badge',
                items: [
                    {label: 'Capillas', icon: 'fa fa-fw fa-minus-square-o', routerLink:'#'}
                ]
            },
            {label: 'Soporte', icon: 'fa fa-fw fa-book', routerLink: '#'}
        ];
    }
}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ul>
            <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
                <li [ngClass]="{'active-menuitem': isActive(i), 'ui-state-disabled':child.disabled}" [class]="child.badgeStyleClass">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" (click)="itemClick($event,child,i)"
                       [attr.tabindex]="!visible ? '-1' : null"  [attr.target]="child.target">
                        <i [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <a *ngIf="child.routerLink" (click)="itemClick($event,child,i)" [attr.target]="child.target"
                        [routerLink]="!child.disabled?child.routerLink:null" routerLinkActive="active-menuitem-routerlink"
                       [routerLinkActiveOptions]="{exact: true}">
                        <i [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <ul app-submenu [item]="child" *ngIf="child.items"
                        [@children]="isActive(i) ? 'visible' : 'hidden'"  [parentActive]="isActive(i)"></ul>
                </li>
            </ng-template>
        </ul>
    `,
    animations: [
        trigger('children', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    activeIndex: number;

    _parentActive: boolean;

    constructor(public app: AppComponent) {}

    itemClick(event: Event, item: MenuItem, index: number) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({originalEvent: event, item});
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            //setTimeout(() => {this.app.scrollerViewChild.moveBar(); }, 400);
            event.preventDefault();
        }

        if (!item.items) {
            this.app.menuActiveMobile = false;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
