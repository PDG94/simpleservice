const {
  getCardActive,
  getCardInactive,
  getUserActive,
  getUserInactive,
} = require("../controllers/adminMetricsController");

const metricsHandler = async (req, res) => {
  try {
    const activeServices = await getCardActive();
    const inActiveServices = await getCardInactive();
    const activeUsers = await getUserActive();
    const inActiveUsers = await getUserInactive();
    ///quick maffs

    const totalServices = activeServices + inActiveServices;
    const servicePercentage = (activeServices / totalServices) * 100;

    const totalUsers = activeUsers + inActiveUsers;
    const usersPercentage = (activeUsers / totalUsers) * 100;

    res
      .status(200)
      .json({
        services: servicePercentage,
        users: usersPercentage,
        totalServices: totalServices,
        totalUsers: totalUsers,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { metricsHandler };
