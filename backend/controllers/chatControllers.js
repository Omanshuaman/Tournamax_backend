const asyncHandler = require("express-async-handler");
const Pin = require("../models/pin");

// @desc    Rename Group
// @route   PUT /api/chat/rename
// @access  Protected
const renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Pin.findByIdAndUpdate(
    chatId,
    {
      pic: chatName,
    },
    {
      new: true,
    }
  );

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(updatedChat);
  }
});

module.exports = {
  renameGroup,
};
