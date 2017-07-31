/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './flashcards';
import * as i2 from '@angular/common';
export const FlashcardsModuleNgFactory:i0.NgModuleFactory<i1.FlashcardsModule> = i0.ɵcmf(i1.FlashcardsModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.FlashcardsModule,i1.FlashcardsModule,
          ([] as any[]))]);
    });
const styles_Flashcards:any[] = ['@media screen and (min-width: 64em) {\n        .pure-g.interactive[_ngcontent-%COMP%] {\n            background: #efefef;\n            padding: 1.5rem 0;\n        }\n    }\n\n    div.cardset-wrapper[_ngcontent-%COMP%] {\n        position: relative;\n        margin: 1.5em auto;\n        max-width: 42rem;\n    }\n\n        div.flashcard-controls[_ngcontent-%COMP%] {\n            text-align: center;\n            margin-bottom: 1.5rem;\n        }\n\n        div.cardset[_ngcontent-%COMP%] {\n            width: 100%;\n            height: 24rem;\n            float: left;\n            display: none;\n            position: relative;\n            box-sizing: border-box;\n            -webkit-perspective: 960px;\n            perspective: 960px;\n            -webkit-transition: all .5s ease;\n            transition: all .5s ease;\n            -webkit-tap-highlight-color: transparent;\n        }\n\n        div.cardset.show[_ngcontent-%COMP%] {\n          display: block;\n        }\n\n        div.cardset[_ngcontent-%COMP%]:hover {\n            cursor: pointer;\n            -webkit-transition: all .5s ease;\n            transition: all .5s ease;\n        }\n\n            div.cardset[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%] {\n                padding: 1.5em;\n                left: 0;\n                top: 0;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                display: block;\n                text-align: center;\n                background-size: cover;\n                background-repeat: no-repeat;\n                background-position: center center;\n                background-color: transparent;\n                background: #fff;\n                box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.26);\n\n            }\n\n            div.cardset[_ngcontent-%COMP%]   div.card.front[_ngcontent-%COMP%] {\n                overflow: hidden;\n                z-index:1000;\n                -ms-transform: rotateX(0deg) rotateY(0deg);\n                -webkit-transform: rotateX(0deg) rotateY(0deg);\n                transform: rotateX(0deg) rotateY(0deg);\n                -webkit-transform-style: preserve-3d;\n                -ms-transform-style: preserve-3d;\n                transform-style: preserve-3d;\n                -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n                -webkit-transition: all .3s ease-in-out;\n                transition: all .3s ease-in-out;\n            }\n\n            div.cardset.flip[_ngcontent-%COMP%]   div.card.front[_ngcontent-%COMP%] {\n                z-index: 800;\n                -ms-transform: rotateY(180deg);\n                -webkit-transform: rotateY(180deg);\n                transform: rotateY(180deg);\n            }\n\n            div.cardset[_ngcontent-%COMP%]   div.card.back[_ngcontent-%COMP%] {\n              background-image:\n              linear-gradient(180deg, white 3rem, #F0A4A4 calc(3rem), #F0A4A4 calc(3rem + 2px), transparent 1px),\n              repeating-linear-gradient(0deg, transparent, transparent 1.5rem, #DDD 1px, #DDD calc(1.5rem + 1px));\n              box-shadow: 1px 1px 3px rgba(0,0,0,.25);\n              background-size: auto 100%;\n              z-index: 800;\n              -ms-transform: rotateY(-180deg);\n              -webkit-transform: rotateY(-180deg);\n              transform: rotateY(-180deg);\n              -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n              -webkit-transition: all .3s ease-in-out;\n              transition: all .3s ease-in-out;\n            }\n\n            div.cardset.flip[_ngcontent-%COMP%]   div.card.back[_ngcontent-%COMP%] {\n                z-index: 1000;\n                -ms-transform: rotateX(0deg) rotateY(0deg);\n                -webkit-transform: rotateX(0deg) rotateY(0deg);\n                transform: rotateX(0deg) rotateY(0deg);\n            }\n\n                div.cardset[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.card-contents[_ngcontent-%COMP%] {\n                    position: relative;\n                    top: 50%;\n                    -webkit-transform: translateY(-50%);\n                    -ms-transform: translateY(-50%);\n                    transform: translateY(-50%);\n                }\n\n                    div.cardset[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.card-contents[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n                        position: relative;\n                        max-height: 16rem;\n                    }\n\n                div.cardset[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   div.card-contents[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n                    margin-top: 0;\n                }'];
export const RenderType_Flashcards:i0.RendererType2 = i0.ɵcrt({encapsulation:0,styles:styles_Flashcards,
    data:{}});
function View_Flashcards_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'img',([] as any[]),
      [[8,'src',4],[8,'alt',0]],(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = (<any>_v.parent).context.$implicit.front.image;
        const currVal_1:any = (<any>_v.parent).context.$implicit.front.alt;
        _ck(_v,0,0,currVal_0,currVal_1);
      });
}
function View_Flashcards_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n              '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
      i0.ɵted((null as any),['\n            ']))],(null as any),(_ck,_v) => {
    const currVal_0:any = (<any>_v.parent).context.$implicit.front.copy;
    _ck(_v,3,0,currVal_0);
  });
}
function View_Flashcards_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',([] as any[]),
      [[8,'innerHTML',1]],(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = (<any>_v.parent).context.$implicit.front.html;
        _ck(_v,0,0,currVal_0);
      });
}
function View_Flashcards_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'img',([] as any[]),
      [[8,'src',4],[8,'alt',0]],(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = (<any>_v.parent).context.$implicit.back.image;
        const currVal_1:any = (<any>_v.parent).context.$implicit.back.alt;
        _ck(_v,0,0,currVal_0,currVal_1);
      });
}
function View_Flashcards_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n              '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
      i0.ɵted((null as any),['\n            ']))],(null as any),(_ck,_v) => {
    const currVal_0:any = (<any>_v.parent).context.$implicit.back.copy;
    _ck(_v,3,0,currVal_0);
  });
}
function View_Flashcards_7(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',([] as any[]),
      [[8,'innerHTML',1]],(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = (<any>_v.parent).context.$implicit.back.html;
        _ck(_v,0,0,currVal_0);
      });
}
function View_Flashcards_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),36,'div',[['class',
      'cardset']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,
          i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      i0.ɵpod(['flip','show']),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          14,'div',[['class','card front']],(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.flipCard(_v.context.index)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n          '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),11,'div',[['class','card-contents']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_Flashcards_2)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Flashcards_3)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,
          'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Flashcards_4)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n          '])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),13,'div',[['class','card back']],(null as any),
              [[(null as any),'click']],(_v,en,$event) => {
                var ad:boolean = true;
                var _co:any = _v.component;
                if (('click' === en)) {
                  const pd_0:any = ((<any>_co.flipCard(_v.context.index)) !== false);
                  ad = (pd_0 && ad);
                }
                return ad;
              },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n          '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),10,'div',[['class','card-contents']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_Flashcards_5)),i0.ɵdid(16384,
          (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Flashcards_6)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Flashcards_7)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n          '])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n      ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'cardset';
    const currVal_1:any = _ck(_v,2,0,_v.context.$implicit.flipped,_co.showCard(_v.context.index));
    _ck(_v,1,0,currVal_0,currVal_1);
    const currVal_2:any = _v.context.$implicit.front.image;
    _ck(_v,10,0,currVal_2);
    const currVal_3:any = _v.context.$implicit.front.copy;
    _ck(_v,13,0,currVal_3);
    const currVal_4:any = _v.context.$implicit.front.html;
    _ck(_v,17,0,currVal_4);
    const currVal_5:any = _v.context.$implicit.back.image;
    _ck(_v,27,0,currVal_5);
    const currVal_6:any = _v.context.$implicit.back.copy;
    _ck(_v,30,0,currVal_6);
    const currVal_7:any = _v.context.$implicit.back.html;
    _ck(_v,33,0,currVal_7);
  },(null as any));
}
function View_Flashcards_8(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),14,'div',[['class',
      'flashcard-controls']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        ',
      ' of ','\n      '])),(_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),3,'button',[['aria-label','previous card'],['class',
          'pure-button pure-button-primary button-oe'],['value','previous card']],
      [[8,'disabled',0]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.changeCard('prev')) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-step-backward']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),3,'button',[['aria-label','next card'],
          ['class','pure-button pure-button-primary button-oe'],['value','next card']],
          [[8,'disabled',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.changeCard('next')) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','fa fa-step-forward']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵted((null as any),['\n    ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = (_co.data.cardNumber + 1);
        const currVal_1:any = _co.data.cards.length;
        _ck(_v,3,0,currVal_0,currVal_1);
        const currVal_2:any = _co.firstCard();
        _ck(_v,5,0,currVal_2);
        const currVal_3:any = _co.lastCard();
        _ck(_v,10,0,currVal_3);
      });
}
export function View_Flashcards_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),5,'div',[['class','cardset-wrapper clearfix']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_Flashcards_1)),i0.ɵdid(802816,(null as any),
          0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Flashcards_8)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n  ']))],(_ck,_v) => {
    var _co:i1.Flashcards = _v.component;
    const currVal_0:any = _co.data.cards;
    _ck(_v,5,0,currVal_0);
    const currVal_1:boolean = !_co.data.graded;
    _ck(_v,10,0,currVal_1);
  },(null as any));
}
export function View_Flashcards_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'oe-flashcards',
      ([] as any[]),(null as any),[['window','keydown']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:keydown' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,1).keyboardInput($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },View_Flashcards_0,RenderType_Flashcards)),i0.ɵdid(114688,(null as any),0,i1.Flashcards,
      ([] as any[]),(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const FlashcardsNgFactory:i0.ComponentFactory<i1.Flashcards> = i0.ɵccf('oe-flashcards',
    i1.Flashcards,View_Flashcards_Host_0,{data:'data'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvbXVycGh5MTEvRG9jdW1lbnRzL3d3dy9uZy1lZHUvY29tcG9uZW50cy9mbGFzaGNhcmRzL2ZsYXNoY2FyZHMubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvbXVycGh5MTEvRG9jdW1lbnRzL3d3dy9uZy1lZHUvY29tcG9uZW50cy9mbGFzaGNhcmRzL2ZsYXNoY2FyZHMudHMiLCJuZzovLy9DOi9Vc2Vycy9tdXJwaHkxMS9Eb2N1bWVudHMvd3d3L25nLWVkdS9jb21wb25lbnRzL2ZsYXNoY2FyZHMvZmxhc2hjYXJkcy50cy5GbGFzaGNhcmRzLmh0bWwiLCJuZzovLy9DOi9Vc2Vycy9tdXJwaHkxMS9Eb2N1bWVudHMvd3d3L25nLWVkdS9jb21wb25lbnRzL2ZsYXNoY2FyZHMvZmxhc2hjYXJkcy50cy5GbGFzaGNhcmRzX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGRpdiBjbGFzcz1cImNhcmRzZXQtd3JhcHBlciBjbGVhcmZpeFwiPlxuICAgICAgPCEtLSBDYXJkIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRzZXRcIiBbbmdDbGFzc109XCJ7J2ZsaXAnOiBjYXJkLmZsaXBwZWQsICdzaG93Jzogc2hvd0NhcmQoaSl9XCIgKm5nRm9yPVwibGV0IGNhcmQgb2YgZGF0YS5jYXJkczsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgPCEtLSBGcm9udCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgZnJvbnRcIiAoY2xpY2spPVwiZmxpcENhcmQoaSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50c1wiPlxuICAgICAgICAgICAgPGltZyAqbmdJZj1cImNhcmQuZnJvbnQuaW1hZ2VcIiBbc3JjXT1cImNhcmQuZnJvbnQuaW1hZ2VcIiBbYWx0XT1cImNhcmQuZnJvbnQuYWx0XCI+XG4gICAgICAgICAgICA8cCAqbmdJZj1cImNhcmQuZnJvbnQuY29weVwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPnt7Y2FyZC5mcm9udC5jb3B5fX08L3N0cm9uZz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNhcmQuZnJvbnQuaHRtbFwiIFtpbm5lckh0bWxdPVwiY2FyZC5mcm9udC5odG1sXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIEJhY2sgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJhY2tcIiAoY2xpY2spPVwiZmxpcENhcmQoaSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50c1wiPlxuICAgICAgICAgICAgPGltZyAqbmdJZj1cImNhcmQuYmFjay5pbWFnZVwiIFtzcmNdPVwiY2FyZC5iYWNrLmltYWdlXCIgW2FsdF09XCJjYXJkLmJhY2suYWx0XCI+XG4gICAgICAgICAgICA8cCAqbmdJZj1cImNhcmQuYmFjay5jb3B5XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e3tjYXJkLmJhY2suY29weX19PC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY2FyZC5iYWNrLmh0bWxcIiBbaW5uZXJIdG1sXT1cImNhcmQuYmFjay5odG1sXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBOZXh0L1ByZXYgQ29udHJvbHMgLS0+XG4gICAgPGRpdiBjbGFzcz1cImZsYXNoY2FyZC1jb250cm9sc1wiICpuZ0lmPVwiIWRhdGEuZ3JhZGVkXCI+XG4gICAgICA8cD5cbiAgICAgICAge3tkYXRhLmNhcmROdW1iZXIgKyAxfX0gb2Yge3tkYXRhLmNhcmRzLmxlbmd0aH19XG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIHZhbHVlPVwicHJldmlvdXMgY2FyZFwiIGFyaWEtbGFiZWw9XCJwcmV2aW91cyBjYXJkXCIgY2xhc3M9XCJwdXJlLWJ1dHRvbiBwdXJlLWJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1vZVwiIChjbGljayk9XCJjaGFuZ2VDYXJkKCdwcmV2JylcIiBbZGlzYWJsZWRdPVwiZmlyc3RDYXJkKClcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGVwLWJhY2t3YXJkXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHZhbHVlPVwibmV4dCBjYXJkXCIgYXJpYS1sYWJlbD1cIm5leHQgY2FyZFwiIGNsYXNzPVwicHVyZS1idXR0b24gcHVyZS1idXR0b24tcHJpbWFyeSBidXR0b24tb2VcIiAoY2xpY2spPVwiY2hhbmdlQ2FyZCgnbmV4dCcpXCIgW2Rpc2FibGVkXT1cImxhc3RDYXJkKClcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGVwLWZvcndhcmRcIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgIiwiPG9lLWZsYXNoY2FyZHM+PC9vZS1mbGFzaGNhcmRzPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ09ZO01BQUE7O1FBQThCO1FBQXlCO1FBQXZELFdBQThCLFVBQXlCLFNBQXZEOzs7O29CQUNBO01BQUEsd0VBQTJCO2FBQUEsc0NBQ3pCO01BQUE7TUFBQSw4QkFBUSx3Q0FBNEI7YUFBQTtJQUE1QjtJQUFBOzs7O29CQUVWO01BQUE7O1FBQTZCO1FBQTdCLFdBQTZCLFNBQTdCOzs7O29CQU1BO01BQUE7O1FBQTZCO1FBQXdCO1FBQXJELFdBQTZCLFVBQXdCLFNBQXJEOzs7O29CQUNBO01BQUEsd0VBQTBCO2FBQUEsc0NBQ3hCO01BQUE7TUFBQSw4QkFBUSx3Q0FBMkI7YUFBQTtJQUEzQjtJQUFBOzs7O29CQUVWO01BQUE7O1FBQTRCO1FBQTVCLFdBQTRCLFNBQTVCOzs7O29CQWxCTjtNQUFBO2FBQUE7bUNBQUE7YUFBcUIsa0JBQXdHLCtDQUM3RztpQkFBQSxnQ0FDZDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQXdCO2NBQUE7Y0FBQTtZQUFBO1lBQXhCO1VBQUEsZ0NBQThDO01BQzVDO1VBQUE7TUFBMkIsbURBQ3pCO1VBQUEsdUVBQUE7VUFBQTtVQUFBLGVBQThFLG1EQUM5RTtpQkFBQTthQUFBO1VBQUEsd0JBRUE7VUFBQTtVQUFBLGdCQUFHLG1EQUNIO2lCQUFBO2FBQUE7VUFBQSx3QkFBaUU7TUFDN0QsK0NBQ0Y7VUFBQSxpQkFDTywrQ0FDYjtpQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUF1QjtrQkFBQTtrQkFBQTtnQkFBQTtnQkFBdkI7Y0FBQSxnQ0FBNkM7TUFDM0M7VUFBQTtNQUEyQixtREFDekI7VUFBQSx1RUFBQTtVQUFBO1VBQUEsZUFBMkUsbURBQzNFO2lCQUFBO2FBQUE7VUFBQSx3QkFFSTtNQUNKO2FBQUE7VUFBQSx3QkFBK0Q7TUFDM0QsK0NBQ0Y7VUFBQTs7SUFwQkg7SUFBZ0I7SUFBckIsV0FBSyxVQUFnQixTQUFyQjtJQUlXO0lBQUwsWUFBSyxTQUFMO0lBQ0c7SUFBSCxZQUFHLFNBQUg7SUFHSztJQUFMLFlBQUssU0FBTDtJQU1LO0lBQUwsWUFBSyxTQUFMO0lBQ0c7SUFBSCxZQUFHLFNBQUg7SUFHSztJQUFMLFlBQUssU0FBTDs7OztvQkFNUjtNQUFBO01BQUEsZ0JBQXFELDZDQUNuRDtNQUFBO01BQUEsNENBQUc7TUFBQSxxQkFFQyw2Q0FDSjtNQUFBO1VBQUE7TUFBQTtRQUFBO1FBQUE7UUFBMkc7VUFBQTtVQUFBO1FBQUE7UUFBM0c7TUFBQSxnQ0FBaUs7TUFDL0o7VUFBQTtNQUF5Qyw2Q0FDbEM7TUFDVDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQW1HO2NBQUE7Y0FBQTtZQUFBO1lBQW5HO1VBQUEsZ0NBQXdKO01BQ3RKO1VBQUE7TUFBd0MsNkNBQ2pDOzs7UUFSTjtRQUFBO1FBQUE7UUFHcUk7UUFBeEksV0FBd0ksU0FBeEk7UUFHZ0k7UUFBaEksWUFBZ0ksU0FBaEk7Ozs7b0JBbENOLDJDQUNJO01BQUE7TUFBQSw0Q0FBc0M7TUFDdkIsNkNBQ2I7VUFBQSx5REFBQTtVQUFBO2NBQUEsMkJBcUJNO01BQ0YsMkNBQ3FCO01BQzNCO2FBQUE7VUFBQSx3QkFVTTs7SUFsQ3lFO0lBQTdFLFdBQTZFLFNBQTdFO0lBd0I4QjtJQUFoQyxZQUFnQyxTQUFoQzs7OztvQkMzQko7TUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLG1EQUFBO01BQUE7SUFBQTs7OzsifQ==