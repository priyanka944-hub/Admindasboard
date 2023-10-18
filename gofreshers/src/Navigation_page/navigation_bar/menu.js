const MenuItems = [
    {name : "Dashboard", to:'/',iconname:"bi bi-speedometer2"},
    {name : "POS", iconname:"bi bi-bag-check-fill", subMenus:[
        {name:"New Sale", to:`/new-sale` },
        {name:"Orders", to:`/pos-orders` }, 
        {new:"Orders",to:`/pos-orders`}]},
    {heading:"Order Management",name:"Orders",iconname:"bi bi-cart",subMenus:[{name:"All",to:`/Oders-all`},{name:"Pending",to:`/Oders-pending`},{name:"Confirmed",to:`/Oders-confirmed`},{name:"Out for Devlivery",to:`/Oders-out-for-delivery`},{name:"Delivered",to:`/Oders-Delivered`},{name:"Returned",to:`/Oders-returned`},{name:"Failed",to:`/Oders-failed`},{name:"Cancelled",to:`/Oders-cancelled`}]},
    {heading:"Product Management",name:"Catergory Setup",iconname:"bi bi-card-checklist",subMenus:[{name:"Categories",to:`/catergory-setup-categories`},{name:"Sub Categories",to:`/catergory-setup-sub-categories`}]},
    {name:"Product Setup",iconname:"bi bi-shield",subMenus:[
        {name:"Product Attribute",to:`/product-setup-product-attribute`},
        {name:"Product list",to:`/product-setup-product-list`},
        {name:"Bulk Import",to:`/product-setup-bulk-import`},
        {name:"Bulk Export",to:`/product-setup-bulk-export`},
        {name:"Limited Stocks",to:`/product-setup-limited-stocks`}
    ]},
    {heading:"Promotion Management",name:"Banner",to:`/banner`,iconname:"bi bi-badge-ad"},
    {name:"Coupons",to:`/coupons`,iconname:"bi bi-gift"},
    {name:"Send Notifications",to:`/send-notification`,iconname:"bi bi-bell"},
    {name:"Flash Sale",to:`/flash-sale`,iconname:"bi bi-receipt"},
    {name:"Category Discount",to:`/category-discount`,iconname:"bi bi-columns-gap"},
    {heading:"Help & Support section",name:"Messages",to:`/messages`,iconname:"bi bi-chat-dots"},
    {heading:"Report & Analytics",name:"Sales Report", to:`/sales-report`,iconname:"bi bi-flag"},
    {name:"Order Report", to:`/order-report`,iconname:"bi bi-flag-fill"},
    {name:"Earning Report",to:`/earning-report`,iconname:"bi bi-activity"},
    {name:"Expense Report", to:`expense-report`,iconname:"bi bi-bar-chart"},
    {name:"Analytics",iconname:"bi bi-pie-chart",subMenus:[
        {name:"Keyword Search",to:`/analytics-keyword-search`},
        {name:"Customer Search",to:'/analytics-customer-search'},
    ]},
    {heading:"User Management",name:"Customer List",to:`/customer-list`,iconname:"bi bi-person"},
    {name:"Customer Settings",to:`/customer-settings`,iconname:"bi bi-person-gear"},
    {name:"Customer Wallet",iconname:"bi bi-person-fill-lock",subMenus:[
        {name:"Add Fund",to:`customer-wallet-add-fund`},
        {name:"Report",to:`customer-wallet-report`},
    ]},
    {name:"Customer Loyalty Poi..",iconname:"bi bi-award",subMenus:[{name:'Report',to:`/customer-loyalty-poilicy-report`}]},
    {name:'Product Reviews',iconname:"bi bi-star",to:`/product-reviews`},
    {name:'Subscribed Emails',iconname:"bi bi-envelope-check",to:`/subcribed-emails`},
    {name:"Deliverman",iconname:"bi bi-truck",subMenus:[
        {name:"Delivery Man List",to:`/deliveryman-delivery-man-list`},
        {name:"Add New Delivery Man",to:`/deliveryman-add-new-delivery-man`},
        {name:"New Joining Request",to:`/delivery-man-new-joinig-request`},
        {name:"Delivery Man Reviews",to:'/delivery-man-delivery-man-reviews'},
    ]},
    {name:"Employees",iconname:"bi bi-diagram-3",subMenus:[
        {name:"Employee Role Setup",to:`/employees-employee-role-setup`},
        {name:"Employee List",to:`/employee-list`},
        {name:"Add New Employee",to:`/add-new-employee`}
        ]},
    {heading:"System Settings",name:"Business Setup",iconname:"bi bi-gear",to:`/business-setup`},
    {name:"Branch Setup",iconname:"bi bi-house-gear",subMenus:[
        {name:"Add New",to:`/bramch-setup-add-new`},
        {name:"List",to:`/branch-setup-list`},
    ]},
    {name:"3rd Party",iconname:"bi bi-calendar3-range-fill",to:`/third-party`},
    {name:"Pages & Media",iconname:"bi bi-file-earmark",subMenus:[
        {name:"Page Setup",to:`/pagesandmedia-page-setup`},
        {name:"Social-Media",to:`/pagesandmedia-social-media`},
    ]},
    {name:"System setup",iconname:"bi bi-shield-check"},
    {name:"",iconname:"",to:``}
    ,{name:"",iconname:"",to:``},
    {name:"",iconname:"",},
    {name:"",iconname:"",to:``}
    ,
]

export default MenuItems