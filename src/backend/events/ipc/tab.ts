import { ipcMain, IpcMainEvent } from "electron";

import Window from "../../models/Window";
import { HandlerProps } from "../../types/index";

const handlers = (window: Window, props: HandlerProps) => {
  const { tablist } = props;

  ipcMain.on("tab-request", (event: IpcMainEvent) => {
    event.reply("update-tabs", tablist.getFriendlyTabs());
  });

  ipcMain.on("tab-new", (event: IpcMainEvent) => {
    tablist.newTab(event);
    event.reply("update-tabs", tablist.getFriendlyTabs());
  });
};

export default handlers;
