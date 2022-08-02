export interface CropAuctionDetail{
    crop_auction_id: Number,
    user_id: Number,
    crop_type: string,
    crop_name: string,
    fertilizer_type: string,
    quantity: Number,
    soil_ph_certificate: string,
    msp: Number,
    sold_date: Date,
    sold_price: Number,
    total_price: Number,
    is_sold: boolean,
    is_approved: boolean,
    base_price: Number
}