export interface Product {
    name: string;
    price: string;
    images: string[];
    type: string;
    size: string;
    feature: string;
    od: string;
    sw: string;
}

export interface ProductCategory {
    categoryName: string;
    products: Product[];
}

export const productCategories: ProductCategory[] = [
    {
        categoryName: 'Solid & Resilient Tyres',
        products: [
            { 
                name: 'Solid Rubber Tubeless Tyre', 
                price: '₹ 7,500 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324303121/LW/EG/AW/137869393/solid-rubber-tyre-500x500.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324303527/UU/CN/MD/137869393/solid-rubber-tyre-500x500.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324639480/PO/TB/XZ/137869393/solid-rubber-tubeless-tyre-500x500.jpg'
                ], 
                type: 'Tubeless', size: 'Various', feature: 'High Durability', od: 'N/A', sw: 'N/A' 
            },
            { 
                name: 'Bobcat Solid Tyre', 
                price: '₹ 8,500 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320423164/NA/AV/FK/137869393/bearcat-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320423236/ST/IO/CU/137869393/bearcat-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324323645/CS/VE/IF/137869393/bobcat-solid-tyre-500x500.jpg'
                ], 
                type: 'Solid', size: '10x16.5', feature: 'Skid Steer', od: '780', sw: '255' 
            },
            { 
                name: 'Bobcat Solid Resilient Tyres', 
                price: '₹ 11,620 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/7/322161256/OK/HX/SJ/137869393/bobcat-tyre-500x500.jpeg'], 
                type: 'Resilient', size: '12x16.5', feature: 'Puncture Proof', od: '830', sw: '300' 
            },
            { 
                name: 'Industrial Solid Rubber Tyre', 
                price: '₹ 5,000 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320424736/OH/ZO/SN/137869393/industrial-tyres-500x500.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320424735/OS/IN/QO/137869393/industrial-tyres-500x500.jpg'
                ], 
                type: 'Solid', size: 'Various', feature: 'Heavy Load', od: 'N/A', sw: 'N/A' 
            },
            { 
                name: 'Solid Rubber Cushion Tyre', 
                price: '₹ 3,500 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/7/322847744/QN/YN/AM/137869393/industrial-solid-tyres-500x500.jpeg'], 
                type: 'Cushion', size: '18x7x12.125', feature: 'Smooth Ride', od: '457', sw: '178' 
            },
            { 
                name: 'Skid Steer Loaders Tyres', 
                price: '₹ 16,000 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320423165/KJ/NO/EH/137869393/bearcat-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324644350/VP/YS/YY/137869393/skid-steer-loaders-tyres-500x500.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324644711/RJ/BS/IN/137869393/skid-steer-loaders-tyres-500x500.jpg'
                ], 
                type: 'Solid', size: '31x10x20', feature: 'Skid Steer', od: '787', sw: '254' 
            },
        ]
    },
    {
        categoryName: 'Forklift Tyres',
        products: [
            { 
                name: 'Industrial Solid Lift Forklift Tyre', 
                price: '₹ 3,300 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/322836066/MG/LX/XS/137869393/forklift-tyre-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324285965/PM/IL/PX/137869393/forklift-tyre-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/322835722/KX/TO/FU/137869393/forklift-tyre-500x500.jpeg'
                ], 
                type: 'Solid', size: '7.00x12', feature: 'Forklift', od: '675', sw: '180' 
            },
            { 
                name: 'Solid Resilient Forklift Tyres', 
                price: '₹ 6,500 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/6/320426052/YY/SE/SL/137869393/solid-resilient-tyre-500x500.jpeg'], 
                type: 'Resilient', size: '28x9x15', feature: 'Long Life', od: '711', sw: '228' 
            },
            { 
                name: '5.00x8-3 Solid Lift Forklift Tyres', 
                price: '₹ 3,800 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/6/320426532/ME/LG/IC/137869393/tow-truck-tyres-500x500.jpeg'], 
                type: 'Solid', size: '5.00x8', feature: '3-Stage Mast', od: '455', sw: '125' 
            },
            { 
                name: 'Forklift Industrial Heavy Vehicle Tyre', 
                price: '₹ 8,000 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320426129/BQ/VO/GA/137869393/industrial-solid-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324635905/XE/HY/TY/137869393/forklift-industrial-heavy-vehicle-tyre-500x500.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324637775/PX/VC/FG/137869393/forklift-industrial-heavy-vehicle-tyre-500x500.jpg'
                ], 
                type: 'Solid', size: '8.25x15', feature: 'Heavy Duty', od: '840', sw: '240' 
            },
            { 
                name: 'Forklift Industrial Solid Tyre', 
                price: '₹ 3,800 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/7/323145241/OK/MH/MF/137869393/forklift-industrial-solid-tyre-500x500.jpeg'], 
                type: 'Solid', size: '6.00x9', feature: 'Standard Forklift', od: '540', sw: '150' 
            },
        ]
    },
    {
        categoryName: 'Heavy Vehicle & Other Tyres',
        products: [
            { 
                name: 'Mining Truck Tubeless Tyre', 
                price: '₹ 23,000 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320422891/KT/PT/TU/137869393/hopper-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320422898/SW/HB/EU/137869393/hopper-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/322846156/HJ/VG/CI/137869393/mining-tyres-500x500.jpeg'
                ], 
                type: 'Tubeless', size: '18.00R33', feature: 'Mining Grade', od: '1875', sw: '500' 
            },
            { 
                name: 'Tubeless Heavy Duty Tyres', 
                price: '₹ 5,000 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/6/320426536/VY/BS/EQ/137869393/tow-truck-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324268566/MI/FL/QE/137869393/tow-truck-tyres-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324633629/BQ/SU/MJ/137869393/tubeless-heavy-duty-tyres-500x500.jpg'
                ], 
                type: 'Tubeless', size: '12.00x20', feature: 'Heavy Load', od: '1120', sw: '315' 
            },
            { 
                name: 'Tractor Trolley Tyre', 
                price: '₹ 1,350 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/7/322843740/TU/QN/VE/137869393/trolley-tyre-500x500.jpeg'], 
                type: 'Pneumatic', size: '9.00x16', feature: 'Agriculture', od: '860', sw: '230' 
            },
        ]
    },
    {
        categoryName: 'Press On Band (POB) Tyres',
        products: [
            { 
                name: 'Press On Band Tyres', 
                price: '₹ 4,000 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/7/324297670/OW/DU/FN/137869393/press-on-band-tyres-500x500.jpg'], 
                type: 'POB', size: '16x6x10.5', feature: 'Warehouse', od: '406', sw: '152' 
            },
            { 
                name: 'Press On Band Hub Type Tyres', 
                price: '₹ 5,000 / Piece', 
                images: ['https://5.imimg.com/data5/SELLER/Default/2023/7/323161512/XL/EH/GS/137869393/press-on-band-hub-type-tyres-500x500.jpeg'], 
                type: 'POB Hub', size: '14x4.5x8', feature: 'Indoor Use', od: '355', sw: '114' 
            },
        ]
    },
    {
        categoryName: 'Rims',
        products: [
            { 
                name: 'Forklift Steel Wheel Rim', 
                price: '₹ 5,000 / Piece', 
                images: [
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/323162324/QT/UA/ST/137869393/forklift-wheels-and-rim-500x500.jpeg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324321379/HD/SD/KT/137869393/forklift-steel-wheel-rim-500x500.jpg',
                    'https://5.imimg.com/data5/SELLER/Default/2023/7/324616809/QE/GI/GA/137869393/forklift-steel-wheel-rim-500x500.jpg'
                ], 
                type: 'Rim', size: 'Various', feature: 'Steel Construction', od: 'N/A', sw: 'N/A' 
            },
        ]
    },
];

export const allProducts = productCategories.flatMap(category => 
    category.products.map(p => ({...p, categoryName: category.categoryName}))
);