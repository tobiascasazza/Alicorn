import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Box } from "native-base";
import NotificationComponent from "../components/molecules/notifications/NotificationComponent";
import notificationsExample from "../../data/notificationExample.json";
import { Notification } from "../models/objects/Notification";

export default function NotificationsPage() {
  const [notifications, setNotifications] = React.useState<Array<Notification>>(
    []
  );

  React.useEffect(() => {
    setNotifications(notificationsExample as unknown as Notification[]);
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
                    id: notification.user.id,
                    name: notification.user.name,
                    lastName: notification.user.lastName,
                    photo: notification.user.photo,
                    features: notification.user.features,
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
