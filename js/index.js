import stripoDefaultExtension from './stripoDefaultExtension';
import {createAlertBlockExtension} from './alertBlockExtension';

const extension = {
    create(stripoConfig, stripoApi, extensionBasePath) {
        return Object.assign({
            stripoConfig: stripoConfig,
            stripoApi: stripoApi,
            extensionBasePath: extensionBasePath,
            ...stripoDefaultExtension,
            ...createAlertBlockExtension(stripoConfig, stripoApi, extensionBasePath)
        });
    }
};

self['AlertBlockExtension'] = extension;




