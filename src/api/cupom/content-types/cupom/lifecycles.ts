import crypto from "crypto";

export default {
  beforeCreate(event) {
    if (!event.params.data.cupom)
      event.params.data.cupom = crypto.randomBytes(4).toString("hex");
  },
};
