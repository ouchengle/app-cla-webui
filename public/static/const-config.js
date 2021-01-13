const SIGNATURE_PAGE_MAX_SIZE = 200;
const SIGNATURE_FILE_MAX_SIZE = 2;
const SIGNATURE_PAGE_NAME = 'signature_page';
const ORG_SIGNATURE_FILE = 'org_signature_file';
const COPYRIGHT = 'Copyright ©2020 claSign';
const INDIVIDUALMETADATAARR = [
    {
        title: `ID`,
        type: 'platform_id',
        description: 'The ID of your authorized account',
        required: true,
    },
    {
        title: 'E-Mail',
        type: 'email',
        description: 'The email of your authorized account',
        required: true,
    },
    {
        title: 'Name',
        type: 'name',
        description: 'your name',
        required: true,
    },];
const CORPORATIONMETADATAARR = [
    {
        title: 'Authorized Representative',
        type: 'authorized',
        description: 'name of Authorized Representative',
        required: true,
    },
    {
        title: 'Title',
        type: 'title',
        description: 'title of Authorized Representative',
        required: true,
    },
    {
        title: 'Corporation Name',
        type: 'corporationName',
        description: 'corporation name',
        required: true,
    },

    {
        title: 'E-Mail',
        type: 'email',
        description: 'corporation email',
        required: true,
    },];
const INITINDIVIDUALCUSTOMMETADATA = [{
    title: '',
    type: '',
    description: '',
    required: false,
}];
const INITCORPCUSTOMMETADATA = [{
    title: '',
    type: '',
    description: '',
    required: false,
}];