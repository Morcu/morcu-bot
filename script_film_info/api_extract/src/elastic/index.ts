
var rp = require('request-promise');
var _ = require('lodash');
var fs = require('fs')
import { mongo_connect, findDocuments } from '../mongo/index';
import { Indexado } from './elastic_api'
const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

//TODO: SOFISTICAR LA CONDICION DE PARADA
const insert_func = (
    db:any, client:any, collection:string, find_filter:any, limit_field:any, elastic_index:string,
    elastic_type:string, skip:number, limit:number, lim:number, count:number) => {
        findDocuments(db,collection, find_filter, limit_field, skip, limit)
                .then((find_data: any) => {
                    console.log('los datos');
                    //console.log(find_data);
                    console.log('s: ' + skip + ' l: ' + limit + ' le: '+ find_data.length);
                    
                    
                    let indexado = new Indexado();
                    let process_values = find_data.map((elem: any) => {
                        if(!_.isNumber(elem.startYear)){
                            elem.startYear = 1;
                        }
                        return elem
                    }); 
                    indexado.bulkIndex(elastic_index, elastic_type, find_data).then( (values: any) => {
                        console.log('__Indexing_');
                        if(find_data.length < 1){
                            client.close()
                        }else{
                            insert_func(db, client, collection, find_filter, limit_field, elastic_index, elastic_type, 0+((limit*(count+1))+(1)), limit, lim, count+1);
                        }
                        
                    });
                    //Insertar en elastic*/
                });
}

export const elastic_insert_form_mongo = (
    dbName:string, collection:string, find_filter:any, limit_field:any, elastic_index:string, elastic_type:string, lim:number, step:number) => {
        mongo_connect(dbName).then((client: any) => {
            let db = client.db(dbName);
            insert_func(db, client,collection, find_filter, limit_field, elastic_index, elastic_type, 0, step, lim, 0);
           
        });
}

