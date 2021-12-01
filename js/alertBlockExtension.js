import {BLOCK_UNIQUE_CLASS_NAME, CONTROL_NAME_BLOCK_BACKGROUND_COLOR, CONTROL_NAME_TITLE_TEXT_COLOR} from './const';
import translations from './translations';
import backgroundColorControl from './controls/backgroundColorControl';
import textColorControl from './controls/textColorControl';
import defaultLayout from './layout/layout.html';


export function createAlertBlockExtension(stripoConfig, stripoApi, extensionBasePath) {
    function isEnabled() {
        return stripoConfig.usefulLinksBlock && stripoConfig.usefulLinksBlock.enabled;
    }

    function emailInitialized(emailBody) {
        if (!isEnabled()) {
            return;
        }
        const alertBlocks = emailBody.find(`.${BLOCK_UNIQUE_CLASS_NAME}`);
        if (alertBlocks.length) {
             alertBlocks.each(function() {
                 const block = stripoApi.jQuery(this);
                 updateLinks(block);

             });
        }
    }

    function updateLinks(block) {
        block.find('ul').remove();
        let links = '<ul>'
        stripoConfig.usefulLinksBlock.items.forEach(item => {
            links += `<li><a target="_blank" href="${item.link}">${item.label}</a></li>`;
        });
        links += '</ul>';
        block.append(links);
    }


    function getBlockLayoutToDrop() {
        return defaultLayout.replace(/#USEFUL_LINKS#/g, stripoApi.translate('preview.links.title'));
    }

    function blockDropped(block) {
        updateLinks(block);
    }

    function getBlockLabel(block) {
        return stripoApi.translate('block.name');
    }

    return {
        name: 'AlertDemoBlock',
        iconClass: 'es-icon-alert-block',
        uniqueClassName: BLOCK_UNIQUE_CLASS_NAME,
        canBeSavedToLibrary: false,
        settingsCssPath: '/assets/css/settings.css',
        i18n: translations,
        blockName: 'block.name',
        emptyContainerIcon: false,
        blockType: 'block',
        controlsToCreate: [
            {control: backgroundColorControl, parentControlName: 'stripoBackgroundColorControl'},
            {control: textColorControl, parentControlName: 'stripoFontColorControl'}
        ],
        blockControls: [
            CONTROL_NAME_BLOCK_BACKGROUND_COLOR,
            CONTROL_NAME_TITLE_TEXT_COLOR
        ],

        isEnabled,
        emailInitialized,
        getBlockLayoutToDrop,
        blockDropped,
        getBlockLabel
    }
}