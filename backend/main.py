from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy database
leads = [
    {
        "id": 1,
        "name": "Rahul Sharma",
        "company": "ABC Pvt Ltd",
        "status": "New"
    }
]

sales_orders = []

inventory = [
    {
        "product": "PCB Board",
        "stock": 120
    },
    {
        "product": "Mobile Screen",
        "stock": 200
    }
]

@app.get("/")
def home():
    return {"message": "ERP Backend Running"}

# GET Leads
@app.get("/leads")
def get_leads():
    return leads

# CREATE Lead
@app.post("/leads")
def create_lead():
    new_lead = {
        "id": len(leads) + 1,
        "name": "New Client",
        "company": "XYZ Ltd",
        "status": "New"
    }

    leads.append(new_lead)

    return {
        "message": "Lead Created",
        "lead": new_lead
    }

# Convert Lead to Sales Order
@app.post("/convert-lead/{lead_id}")
def convert_lead(lead_id: int):

    for lead in leads:

        if lead["id"] == lead_id:

            lead["status"] = "Converted"

            order = {
                "order_id": len(sales_orders) + 1,
                "client": lead["name"],
                "product": "PCB Board",
                "quantity": 10,
                "status": "Manufacturing Started"
            }

            sales_orders.append(order)

            # Inventory Update
            inventory[0]["stock"] -= 10

            return {
                "message": "Lead Converted Successfully",
                "sales_order": order,
                "inventory_updated": inventory
            }

    return {"error": "Lead not found"}

# GET Sales Orders
@app.get("/sales-orders")
def get_sales_orders():
    return sales_orders

# GET Inventory
@app.get("/inventory")
def get_inventory():
    return inventory