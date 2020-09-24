/*! For license information please see algorithm.js.LICENSE.txt */
!function(e){var t={};function r(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6096)}({133:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GeneticAlgorithmBase=void 0;var s=r(179);Object.defineProperty(t,"GeneticAlgorithmBase",{enumerable:!0,get:function(){return s.GeneticAlgorithmBase}})},179:function(e,t,r){"use strict";var s=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))((function(i,o){function n(e){try{h(s.next(e))}catch(e){o(e)}}function a(e){try{h(s.throw(e))}catch(e){o(e)}}function h(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}h((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.GeneticAlgorithmBase=void 0;const i=r(24);class o extends i.AlgorithmBase{init(e){return s(this,void 0,void 0,(function*(){}))}}t.GeneticAlgorithmBase=o},180:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Acid=void 0;t.Acid=class{constructor(e){this._value=e}get value(){return this._value}mutation(e){this._value=e}}},181:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlgorithmBase=void 0;t.AlgorithmBase=class{constructor(e){this._bestChanged=e,this._chromosomes=[],this._fitness=0}get generationNumber(){return this.islands.reduce((e,t)=>e+t.generationNumber,0)}get offspringNumber(){return this.islands.reduce((e,t)=>e+t.offspringNumber,0)}get initialized(){return this.islands.every(e=>e.initialized)}get chromosomes(){return this._chromosomes}get migration(){}get best(){return this._chromosomes[0]}get progress(){return this.termination.progress}get hasReached(){return this.termination.hasReached(this)}resetChromosomes(){this._chromosomes.length=0,this.islands.forEach(e=>{e.population.chromosomes.forEach(e=>{this._chromosomes.push(e)})})}updateChromosomes(){if(this._chromosomes.sort((e,t)=>t.fitness-e.fitness),this._chromosomes.length){const e=this._chromosomes[0].fitness;e>=0&&e!==this._fitness&&(this._fitness=e,this._bestChanged&&this._bestChanged())}}reset(){var e;this.islands.forEach(e=>e.reset()),this.resetChromosomes(),null===(e=this.migration)||void 0===e||e.init(),this.termination.init(),this.updateChromosomes(),this.performReset()}performReset(){}step(){var e;this.hasReached||(this.islands.forEach(e=>e.step()),null===(e=this.migration)||void 0===e||e.migrate(this),this.updateChromosomes(),this.performStep())}performStep(){}}},182:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChromosomeBase=void 0;t.ChromosomeBase=class{constructor(e,t=!1){if(!t&&e<1)throw new Error("Too short.");this.acids=new Array(e)}createFromAcids(e){this.acids=[...e]}get length(){return this.acids.length}getAcid(e){return this.acids[e]}setAcid(e,t){this.acids[e]=t}deleteAcid(e){this.acids.splice(e,1)}insertAcid(e,t){this.acids.splice(e,0,t)}generateAcids(){[...Array(this.length).keys()].forEach(e=>this.setAcid(e,this.generateAcid(e)))}clone(){const e=this.createNew();return e.copyFrom(this),e}copyFrom(e){e.length!==this.length&&(this.acids=new Array(e.length));for(let t=e.length;--t>=0;)this.acids[t]=e.getAcid(t);this.performCopyFrom(e)}performCopyFrom(e){}mutation(e){this.acids[e]=this.generateAcid(e)}}},183:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CrossoverBase=void 0;t.CrossoverBase=class{constructor(e,t,r){this._parentsNumber=e,this._childrenNumber=t,this._probability=r}get parentsNumber(){return this._parentsNumber}get childrenNumber(){return this._childrenNumber}cross(e){if(e.length!==this.parentsNumber)throw new Error("Length is not same.");const t=this.performCross(e,this._probability);if(t.length!==this.childrenNumber)throw new Error("Length is not same.");return t}}},184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FitnessBase=void 0;t.FitnessBase=class{}},185:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MutationBase=void 0;t.MutationBase=class{constructor(e,t=0,r=0){this._probability=e,this._deleteProbability=t,this._insertProbability=r}mutate(e){this._deleteProbability>0&&Math.random()<this._deleteProbability&&this.deleteAcid(e),[...Array(e.length).keys()].forEach(t=>{Math.random()<this._probability&&e.mutation(t)}),this._insertProbability>0&&Math.random()<this._insertProbability&&this.insertAcid(e)}deleteAcid(e){e.length<=1||e.deleteAcid(Math.floor(Math.random()*e.length))}insertAcid(e){const t=Math.floor(Math.random()*(e.length+1));e.insertAcid(t,e.generateAcid(t))}}},186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PopulationBase=void 0;t.PopulationBase=class{constructor(e,t){this._size=e,this._adamChromosome=t,this._chromosomes=[],this._pool=[],[...Array(e)].forEach(()=>{this._pool.push(t.clone())})}get chromosomes(){return this._chromosomes}get size(){return this._size}init(){this._chromosomes=new Array,[...Array(this.size)].forEach(()=>this._chromosomes.push(this._adamChromosome.createNew())),this.performInit()}performInit(){}update(e){if(this.size!==e.length)throw new Error("Population size does not match the setting.");for(let t=e.length;--t>=0;)this._pool[t].copyFrom(e[t]);for(let e=this._pool.length;--e>=0;)this._chromosomes[e].copyFrom(this._pool[e])}}},187:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IslandBase=void 0;t.IslandBase=class{constructor(){this._generationNumber=0,this._offspringNumber=0,this._initialized=!1}get generationNumber(){return this._generationNumber}get offspringNumber(){return this._offspringNumber}get initialized(){return this._initialized}reset(){this._initialized=!1,this.population.init(),this.population.chromosomes.forEach(e=>{this.fitness.evaluate(e)}),this._generationNumber=0,this._offspringNumber=0,this.performReset(),this._initialized=!0}performReset(){}performMutate(e){e.forEach(e=>{this.mutation.mutate(e)})}performEvaluate(e){e.forEach(e=>{this.fitness.evaluate(e)})}step(){this._initialized||this.reset();const{parents:e,population:t}=this.selection.select(this.population.chromosomes),r=this.crossover.cross(e),s=r.length;this.performMutate(r);const i=[...r];e.forEach(e=>{i.push(e)}),this.performEvaluate(i);const o=this.reinsertion.select(t,r,e);this.population.update(o),this._generationNumber++,this._offspringNumber+=s,this.performStep()}performStep(){}}},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MigrationBase=void 0;class s{constructor(){this.prev=0,this.time=0}get rate(){return.1}get interval(){return 1e4}init(){this.prev=0,this.time=0}getCount(e){return e.offspringNumber}getDestinations(e){const t=e.islands.length,r=this.time%(t-1);return[...Array(t).keys()].map(e=>(e+1+r)%t)}migrate(e){if(e.islands.length<=1)return;const t=this.getCount(e);t>=this.prev+this.interval&&(this.prev=t,this.performMigrate(e),this.time++)}static takeRandomChromosomes(e,t){const r=[];for(;--t>=0;)r.push(...e.splice(Math.floor(Math.random()*e.length),1));return r}getTakeCount(e){return Math.ceil(e.length*this.rate)}static splitChromosomes(e,t){const r=[...e];return{population:r,emigrants:s.takeRandomChromosomes(r,t)}}performMigrate(e){const t=this.getDestinations(e),r=e.islands.map(e=>s.splitChromosomes(e.population.chromosomes,this.getTakeCount(e.population.chromosomes)));r.forEach((e,s)=>{r[t[s]].population.push(...e.emigrants)}),e.islands.forEach((e,t)=>e.population.update(r[t].population))}}t.MigrationBase=s},189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReinsertionBase=void 0;t.ReinsertionBase=class{}},190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionBase=void 0;t.SelectionBase=class{takeRandom(e){return e.splice(Math.floor(Math.random()*e.length),1)[0]}takeByFitness(e){const t=e.reduce((e,t)=>e+t.fitness,0);let r=0;const s=Math.random()*t;for(let t=0;t<e.length;t++){const i=e[t];if(r+=i.fitness,r>=s)return e.splice(t,1),i}throw new Error("Unexpected error")}takeByOrder(e){const t=e.length*(e.length+1)/2;let r=0;const s=Math.random()*t;for(let t=0;t<e.length;t++)if(r+=e.length-t,r>=s){const r=e[t];return e.splice(t,1),r}throw new Error("Unexpected error")}}},191:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TerminationBase=void 0;t.TerminationBase=class{constructor(){this._hasReached=!1,this._progress=0}get progress(){return this._progress}init(){this._hasReached=!1,this._progress=0,this.performInit()}performInit(){}hasReached(e){return this._hasReached||(this._hasReached=this.performHasReached(e),this._hasReached?this._progress=1:this._progress=this.performGetProgress(e)),this._hasReached}}},24:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TerminationBase=t.SelectionBase=t.ReinsertionBase=t.MigrationBase=t.IslandBase=t.PopulationBase=t.MutationBase=t.FitnessBase=t.CrossoverBase=t.ChromosomeBase=t.AlgorithmBase=t.Acid=void 0;var s=r(180);Object.defineProperty(t,"Acid",{enumerable:!0,get:function(){return s.Acid}});var i=r(181);Object.defineProperty(t,"AlgorithmBase",{enumerable:!0,get:function(){return i.AlgorithmBase}});var o=r(182);Object.defineProperty(t,"ChromosomeBase",{enumerable:!0,get:function(){return o.ChromosomeBase}});var n=r(183);Object.defineProperty(t,"CrossoverBase",{enumerable:!0,get:function(){return n.CrossoverBase}});var a=r(184);Object.defineProperty(t,"FitnessBase",{enumerable:!0,get:function(){return a.FitnessBase}});var h=r(185);Object.defineProperty(t,"MutationBase",{enumerable:!0,get:function(){return h.MutationBase}});var c=r(186);Object.defineProperty(t,"PopulationBase",{enumerable:!0,get:function(){return c.PopulationBase}});var u=r(187);Object.defineProperty(t,"IslandBase",{enumerable:!0,get:function(){return u.IslandBase}});var l=r(188);Object.defineProperty(t,"MigrationBase",{enumerable:!0,get:function(){return l.MigrationBase}});var m=r(189);Object.defineProperty(t,"ReinsertionBase",{enumerable:!0,get:function(){return m.ReinsertionBase}});var d=r(190);Object.defineProperty(t,"SelectionBase",{enumerable:!0,get:function(){return d.SelectionBase}});var f=r(191);Object.defineProperty(t,"TerminationBase",{enumerable:!0,get:function(){return f.TerminationBase}})},43:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},436:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var s=r(133);class i{static getValue(e){return e.getGenes()}}var o=r(24);class n extends o.TerminationBase{constructor(e){super(),this.offspringNumber=e}performGetProgress(e){return e.offspringNumber/this.offspringNumber}performHasReached(e){return e.offspringNumber>=this.offspringNumber}}class a extends o.MigrationBase{get rate(){return.01}get interval(){return 1e5}}class h extends o.PopulationBase{constructor(e,t){super(e,t)}}class c extends o.ChromosomeBase{constructor(){var e,t,r;super(0,!0),r=void 0,(t="_fitness")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._fitness=-1,this.generateAcids()}get fitness(){return this._fitness}set fitness(e){this._fitness=e}createNew(){return new c}generateAcid(e){return new o.Acid(Math.floor(2*Math.random()))}getGenes(){return[...Array(this.length).keys()].map(e=>Number(this.getAcid(e).value))}performCopyFrom(e){this._fitness=e.fitness}}class u extends o.FitnessBase{constructor(e){super(),this.testData=e}evaluate(e){const t=e,r=i.getValue(t),s=Math.abs(this.testData.length-r.length)+Math.abs(this.testData.length-r.reduce((e,t)=>e+t,0));t.fitness=1/(s+1)}}class l extends o.MutationBase{constructor(e,t,r){super(e,t,r)}}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class d extends o.IslandBase{constructor(e,t,r,s,i){super(),m(this,"_fitness",void 0),m(this,"_mutation",void 0),m(this,"_population",void 0),this._fitness=new u(i),this._mutation=new l(t,r,s),this._population=new h(e,new c)}get population(){return this._population}get fitness(){return this._fitness}get mutation(){return this._mutation}}class f extends o.CrossoverBase{constructor(e,t,r){var s,i,o;super(2,2*r,e),this.mixProbability=t,this.crossoverTime=r,o=[],(i="_pool")in(s=this)?Object.defineProperty(s,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[i]=o,t>.5&&(this.mixProbability=1-t),this.mixProbability=Math.min(Math.max(this.mixProbability,0),.5),[...Array(this.childrenNumber)].forEach(()=>{this._pool.push(new c)})}performCross(e,t){const r=e[0],s=e[1];let i=0;return[...Array(this.crossoverTime)].forEach(()=>{const e=this._pool[i++],o=this._pool[i++];if(e.copyFrom(r),o.copyFrom(s),t>0&&Math.random()<t){const t=Math.min(r.length,s.length),i=r.length-s.length<=0?0:Math.floor(Math.random()*(r.length-s.length+1)),n=r.length-s.length>=0?0:Math.floor(Math.random()*(s.length-r.length+1));for(let a=0;a<t;a++)Math.random()<this.mixProbability&&(e.setAcid(i+a,s.getAcid(n+a)),o.setAcid(n+a,r.getAcid(i+a)))}}),this._pool}}class p extends o.ReinsertionBase{constructor(e=!0){super(),this.addParentsToOffspring=e}select(e,t,r){const s=[...t];this.addParentsToOffspring&&s.push(...r),s.sort((e,t)=>{var r,s;return(null!==(r=t.fitness)&&void 0!==r?r:-1)-(null!==(s=e.fitness)&&void 0!==s?s:-1)});const i=[...e];return i.push(s.splice(0,1)[0]),i.push(this.take(s)),i}take(e){const t=e.reduce((e,t)=>{var r;return e+(null!==(r=t.fitness)&&void 0!==r?r:0)},0);let r=0;const s=Math.random()*t;for(const t of e){var i;if(r+=null!==(i=t.fitness)&&void 0!==i?i:0,r>=s)return t}throw new Error("Unexpected error")}}class g extends o.SelectionBase{}class b extends g{select(e){const t=[...e];return{parents:[this.takeByOrder(t),this.takeByOrder(t)],population:t}}}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class v extends d{constructor(e,t){super(Math.floor(e.populationSize/e.islandNumber),e.mutationProbability,e.mutationDeleteProbability,e.mutationInsertProbability,t),_(this,"_crossover",void 0),_(this,"_reinsertion",void 0),_(this,"_selection",void 0),this._crossover=new f(e.crossoverProbability,e.mixProbability,e.crossoverTime),this._reinsertion=new p,this._selection=new b}get crossover(){return this._crossover}get reinsertion(){return this._reinsertion}get selection(){return this._selection}}class y extends o.CrossoverBase{constructor(e){var t,r,s;super(2,2,e),s=[],(r="_pool")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,[...Array(this.childrenNumber)].forEach(()=>{this._pool.push(new c)})}performCross(e,t){let r=0;return e.forEach(e=>{this._pool[r++].copyFrom(e)}),this._pool}}class B extends o.ReinsertionBase{constructor(){super()}select(e,t,r){return[...e,...t]}}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class M extends d{constructor(e,t){super(Math.floor(e.populationSize/e.islandNumber),e.mutationProbability,e.mutationDeleteProbability,e.mutationInsertProbability,t),P(this,"_crossover",void 0),P(this,"_reinsertion",void 0),P(this,"_selection",void 0),this._selection=new b,this._crossover=new y(e.crossoverProbability),this._reinsertion=new B}get crossover(){return this._crossover}get reinsertion(){return this._reinsertion}get selection(){return this._selection}}class A{constructor(e){this._length=e}get length(){return this._length}}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class O extends s.GeneticAlgorithmBase{constructor(e,t){super(e),w(this,"_islands",void 0),w(this,"_termination",void 0),w(this,"_migration",void 0),this._termination=new n(t.terminateOffspringNumber),this._migration=new a,this._islands=[]}async init(e){const t=new A(e.length),r=Math.floor(e.islandNumber*e.culturalIslandRate),s=e.islandNumber-r;[...Array(s)].forEach(()=>{this._islands.push(new v(e,t))}),r>0&&[...Array(r)].forEach(()=>{this._islands.push(new M(e,t))})}get islands(){return this._islands}get migration(){return this._migration}get termination(){return this._termination}async getObject(){return{population:this.chromosomes.map(e=>{var t;const r=e;return{value:i.getValue(r).join(" "),fitness:null!==(t=r.fitness)&&void 0!==t?t:0}}),progress:this.progress}}}},6096:function(e,t,r){"use strict";r.r(t),function(e){var t=r(436);e.GeneticAlgorithm=class extends t.a{}}.call(this,r(43))}});