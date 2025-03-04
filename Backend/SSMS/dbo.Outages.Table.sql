USE [CrisisConnect]
GO
/****** Object:  Table [dbo].[Outages]    Script Date: 10/26/2024 2:23:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Outages](
	[OutageID] [int] NOT NULL,
	[AgentID] [int] NOT NULL,
	[ServiceID] [int] NOT NULL,
	[StartTime] [datetime] NOT NULL,
	[EndTime] [datetime] NULL,
	[Severity] [varchar](50) NULL,
	[Reason] [text] NULL,
 CONSTRAINT [PK_Outages] PRIMARY KEY CLUSTERED 
(
	[OutageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Outages]  WITH CHECK ADD  CONSTRAINT [FK_Outages_Agents] FOREIGN KEY([AgentID])
REFERENCES [dbo].[Agents] ([AgentID])
GO
ALTER TABLE [dbo].[Outages] CHECK CONSTRAINT [FK_Outages_Agents]
GO
ALTER TABLE [dbo].[Outages]  WITH CHECK ADD  CONSTRAINT [FK_Outages_Services] FOREIGN KEY([ServiceID])
REFERENCES [dbo].[Services] ([ServiceID])
GO
ALTER TABLE [dbo].[Outages] CHECK CONSTRAINT [FK_Outages_Services]
GO
