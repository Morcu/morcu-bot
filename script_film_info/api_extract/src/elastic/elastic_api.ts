const rp = require('request-promise');
const elasticsearch = require('elasticsearch');

const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

export class Indexado {

    public bulkIndex(index: string, type: string, data: any) {
        let bulkBody: any[] = [];

        data.forEach((item: any) => {
            bulkBody.push({
                index: {
                    _index: index,
                    _type: type,
                    _id: item.id
                }
            });

            bulkBody.push(item);
        });

        return esClient.bulk({ body: bulkBody })
            .then((response: any) => {
                let errorCount = 0;
                response.items.forEach((item: any) => {
                    if (item.index && item.index.error) {
                        console.log(++errorCount, item.index.error);
                    }
                });
                console.log(`Successfully indexed ${data.length - errorCount} out of ${data.length} items`);
                return response;
            })
            .catch(console.log);
    };

    public bulkDelete(index: string, type: string, data: any) {
        let bulkBody: any[] = [];

        data.forEach((item: any) => {
            bulkBody.push({
                delete: {
                    _index: index,
                    _type: type,
                    _id: item.id
                }
            });

            //bulkBody.push(item);
        });

        esClient.bulk({ body: bulkBody })
            .then((response: any) => {
                let errorCount = 0;
                response.items.forEach((item: any) => {
                    if (item.index && item.index.error) {
                        console.log(++errorCount, item.index.error);
                    }
                });

                console.log(`Successfully deleted ${data.length - errorCount} out of ${data.length} items`);
            })
            .catch(console.log);
    };

};


