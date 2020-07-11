module.exports = mongoose => {
    let carSchema = mongoose.Schema(
        {
            model: {
                type: String,
                required: true
            },
            horsePower: {
                type: Number,
                required: true
            },
            engineCapacity: {
                type: Number,
                required: true
            },
            doors: {
                type: Number,
                required: true
            },
            seats: {
                type: Number,
                required: true
            },
        }
    );

    //remove the _v and replace '_id' by 'id' in requests
    carSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    return mongoose.model('car', carSchema);
};


