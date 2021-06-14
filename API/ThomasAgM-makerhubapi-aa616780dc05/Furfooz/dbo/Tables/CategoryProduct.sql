CREATE TABLE [dbo].[CategoryProduct] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [Name_fr]   VARCHAR (25) NOT NULL,
    [Name_nl]   VARCHAR (25) NOT NULL,
    [Name_en]   VARCHAR (25) NOT NULL,
    [IsDeleted] BIT          NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

