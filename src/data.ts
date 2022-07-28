export let groupData: any = [
    {
        "text": "Audi A4",
        "id": "9bdb",
        "category": "Audi"
    },
    {
        "text": "Audi A5",
        "id": "4589",
        "category": "Audi"
    },
    {
        "text": "Audi A6",
        "id": "e807",
        "category": "Audi"
    },
    {
        "text": "Audi A7",
        "id": "a0cc",
        "category": "Audi"
    },
    {
        "text": "Audi A8",
        "id": "5e26",
        "category": "Audi"
    },
    {
        "text": "BMW 501",
        "id": "f849",
        "category": "BMW"
    },
    {
        "text": "BMW 502",
        "id": "7aff",
        "category": "BMW"
    },
    {
        "text": "BMW 503",
        "id": "b1da",
        "category": "BMW"
    },
    {
        "text": "BMW 507",
        "id": "de2f",
        "category": "BMW"
    },
    {
        "text": "BMW 3200",
        "id": "b2b1",
        "category": "BMW"
    }
];

 //Define an array of JSON data
 export let nestedListData: { [key: string]: Object }[] = [
    {
        id: '01', text: 'Music', icon: 'folder',
        child: [
            { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }
        ]
    },
    {
        id: '02', text: 'Videos', icon: 'folder',
        child: [
            { id: '02-01', text: 'Naturals.mp4', icon: 'file' },
            { id: '02-02', text: 'Wild.mpeg', icon: 'file' },
        ]
    },
    {
        id: '03', text: 'Documents', icon: 'folder',
        child: [
            { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },
            { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },
            { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },
            { id: '03-04', text: 'Social Network.pdf', icon: 'file' },
            { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },
        ]
    },
    {
        id: '04', text: 'Pictures', icon: 'folder',
        child: [
            {
                id: '04-01', text: 'Camera Roll', icon: 'folder',
                child: [
                    { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },
                    { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },
                    { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }
                ]
            },
            {
                id: '04-02', text: 'Wind.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Stone.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Home.jpg', icon: 'file'
            },
            {
                id: '04-02', text: 'Bridge.png', icon: 'file'
            }
        ]
    },
    {
        id: '05', text: 'Downloads', icon: 'folder',
        child: [
            { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },
            { id: '05-02', text: 'Tutorials.zip', icon: 'file' },
            { id: '05-03', text: 'Game.exe', icon: 'file' },
            { id: '05-04', text: 'TypeScript.7z', icon: 'file' },
        ]
    },
];