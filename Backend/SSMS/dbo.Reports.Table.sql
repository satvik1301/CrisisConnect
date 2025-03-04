USE [CrisisConnect]
GO
/****** Object:  Table [dbo].[Reports]    Script Date: 10/26/2024 2:23:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reports](
	[ReportID] [int] NOT NULL,
	[AgentID] [int] NOT NULL,
	[StartTime] [datetime] NOT NULL,
	[EndTime] [datetime] NOT NULL,
	[UptimePercent] [decimal](5, 2) NULL,
	[Generated_At] [datetime] NOT NULL,
 CONSTRAINT [PK_Reports] PRIMARY KEY CLUSTERED 
(
	[ReportID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Reports]  WITH CHECK ADD  CONSTRAINT [FK_Reports_Agents] FOREIGN KEY([AgentID])
REFERENCES [dbo].[Agents] ([AgentID])
GO
ALTER TABLE [dbo].[Reports] CHECK CONSTRAINT [FK_Reports_Agents]
GO
