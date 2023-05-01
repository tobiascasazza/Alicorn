import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Box } from "native-base";
import NotificationComponent from "../components/cards/molecules/NotificationComponent";
import notificationsExample from "../../exampleData/notificationExample.json";
import { Notification } from "../models/objects/Notification";

export default function NotificationsPage() {
  const [notifications, setNotifications] = React.useState<Array<Notification>>(
    []
  );

  React.useEffect(() => {
    setNotifications(notificationsExample);
  }, []);

  return (
    <ScrollView>
      <Box textAlign={"center"}>
        {notifications.length > 0 ? (
          notifications.map((notification) => {
            return (
              <React.Fragment key={notification.item + Math.random()}>
                <NotificationComponent
                  notificationType={notification.notificationType}
                  user={{
                    name: notification.user.name,
                    lastName: notification.user.lastName,
                    photo: notification.user.photo,
                  }}
                  notificationDateTime={notification.notificationDateTime}
                  notificationStatus={notification.notificationStatus}
                  item={notification.item}
                />
              </React.Fragment>
            );
          })
        ) : (
          <Text>You don't have any notification yet</Text>
        )}
      </Box>
    </ScrollView>
  );
}
