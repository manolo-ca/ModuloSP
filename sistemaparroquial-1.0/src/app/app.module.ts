import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PanelModule } from 'primeng/panel';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GalleriaModule } from 'primeng/galleria';
import { GrowlModule } from 'primeng/growl';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import {AppMenuComponent, AppSubMenuComponent} from './app.menu.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {SampleDemoComponent} from './demo/view/sampledemo.component';
import {FormsDemoComponent} from './demo/view/formsdemo.component';
import {DataDemoComponent} from './demo/view/datademo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {UtilsDemoComponent} from './demo/view/utilsdemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';

import {CarService} from './demo/service/carservice';
import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import { MatCheckboxModule } from '@angular/material';
import {ModuloComponent} from './Inicio/modulo/modulo.component';
import { LoginService } from './login/login.service';
import { LoginComponent} from './login/login.component';
import { ServicioslistaComponent } from './modulosp/administrar/servicioslista/servicioslista.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicioslistacrearComponent } from './modulosp/administrar/servicioslistacrear/servicioslistacrear.component';
import { TiposdocumentosComponent } from './modulosp/administrar/tiposdocumentos/tiposdocumentos.component';
import { TiposdocumentoscrearComponent } from './modulosp/administrar/tiposdocumentoscrear/tiposdocumentoscrear.component';
import { EmiciondocumentosComponent } from './modulosp/administrar/emiciondocumentos/emiciondocumentos.component';
import { EmisiondocumentosusuarioComponent } from './modulosp/usuario/emisiondocumentosusuario/emisiondocumentosusuario.component';
import { ReservacioneucaristiasusuarioComponent } from './modulosp/usuario/reservacioneucaristiasusuario/reservacioneucaristiasusuario.component';
import { DocumentopersonasComponent } from './modulosp/administrar/documentopersonas/documentopersonas.component';
import { ReservacioneucaristiasComponent } from './modulosp/administrar/reservacioneucaristias/reservacioneucaristias.component';
import { InscripcioneucaristiasComponent } from './modulosp/administrar/inscripcioneucaristias/inscripcioneucaristias.component';
import { DocumentopersonascrearComponent } from './modulosp/administrar/documentopersonascrear/documentopersonascrear.component';

const routes: Routes=[
  {path:'',redirectTo:'', pathMatch:'full'},
  {path:'modulosp/administrar/servicioslista',component:ServicioslistaComponent},
  {path:'modulosp/administrar/servicioslistacrear',component:ServicioslistacrearComponent},
  {path:'modulosp/administrar/tiposdocumentos',component:TiposdocumentosComponent},
  {path:'modulosp/administrar/tiposdocumentoscrear',component:TiposdocumentoscrearComponent},
  {path:'modulosp/administrar/documentopersonas',component:DocumentopersonasComponent},
  {path:'modulosp/administrar/documentopersonascrear',component:DocumentopersonascrearComponent},
  {path:'modulosp/administrar/emiciondocumentos',component:EmiciondocumentosComponent},
  {path:'modulosp/administrar/inscripcioneucaristias',component:InscripcioneucaristiasComponent},
  {path:'modulosp/administrar/reservacioneucaristias',component:ReservacioneucaristiasComponent},


  
  {path:'modulosp/usuario/emisiondocumentosusuario',component:EmisiondocumentosusuarioComponent},
  {path:'modulosp/usuario/reservacioneucaristiasusuario',component:ReservacioneucaristiasusuarioComponent}

  
];
@NgModule({
  declarations: [
    
    AppComponent,
    ModuloComponent,
    LoginComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    DashboardDemoComponent,
    SampleDemoComponent,
    FormsDemoComponent,
    DataDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MenusDemoComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    UtilsDemoComponent,
    DocumentationComponent,
    ServicioslistaComponent,
    ServicioslistacrearComponent,
    TiposdocumentosComponent,
    TiposdocumentoscrearComponent,
    EmiciondocumentosComponent,
    EmisiondocumentosusuarioComponent,
    ReservacioneucaristiasusuarioComponent,
    ReservacioneucaristiasComponent,
    DocumentopersonasComponent,
    InscripcioneucaristiasComponent,
    DocumentopersonascrearComponent
  ],

  
  imports: [
    DropdownModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MegaMenuModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    PDFExportModule,
    PanelModule,
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    FullCalendarModule,
    GalleriaModule,
    GrowlModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
    MatCheckboxModule

  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy},
              CarService, CountryService, EventService, NodeService, LoginService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
